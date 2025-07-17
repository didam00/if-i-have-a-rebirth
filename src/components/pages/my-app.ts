import { populationStore } from '@/store/population.store';
import type { CountryData } from '@/types';
import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('my-app')
export class MyApp extends LitElement {
  @state()
  country: CountryData | null = {
    "name": "대한민국",
    "population": 51207874,
    "percentage": 0.59,
    "year": 2025,
    "code": "kr"
  };

  @state()
  countryName: string = '대한민국';

  @state()
  countryPercentage: number = 0.59;

  @state()
  imageUrl: string = 'https://flagcdn.com/w640/kr.jpg';

  @state()
  isLoading: boolean = false;

  render() {
    return html`
      <div class='container'>
        <h1>다시 태어날거야</h1>
        <p>실제 국가별 인구 수와 소득 비율을 고려하여 다시 태어나면 어디서 태어날 지 랜덤으로 보여줍니다!</p>
        <div class="info">
          <div class='flag-image'>
            <img src=${this.imageUrl} onerror='this.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_with_question_mark.svg/1200px-Flag_with_question_mark.svg.png"'>
            </img>
          </div>
          <div class='country-name'>${this.countryName} (${this.countryPercentage}%)</div>
          <random-button ?disabled=${this.isLoading}></random-button>
        </div>
      </div>
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    await populationStore.loadData();
  }

  firstUpdated() {
    this.addEventListener('country-selected', ((event: CustomEvent) => {
      const { country } = event.detail;
      this.country = country;

      this.isLoading = true;

      const img = new Image();
      img.src = `https://flagcdn.com/w320/${country.code}.jpg`;
      const inDuration = 750;
      const outDuration = 250;

      // 로딩되는 동안 국가 이름 변경
      const now: number = Date.now();
      const interval = setInterval(async () => {
        const diff = Date.now() - now;
        const percentage = Math.min(diff / (inDuration + outDuration), 1);

        await populationStore.loadData();
        const countries: readonly CountryData[] = populationStore.countries;
        const country = countries[Math.floor(Math.random() * countries.length)];
        this.countryName = country.name;
        this.countryPercentage = country.percentage;
      }, 50);

      // 이미지 변경 애니메이션 (로딩 안보이게 하기 위해 ㅎ)
      const flagImage = this.shadowRoot?.querySelector('.flag-image');
      if (flagImage) {
        flagImage.animate([{
          opacity: 1,
        }, {
          opacity: 0,
        }], {
          duration: inDuration,
          easing: 'ease-out',
        });

        setTimeout(() => {
          this.imageUrl = img.src;
          flagImage.animate([{
            opacity: 0,
          }, {
            opacity: 1,
          }], {
            duration: outDuration,
            easing: 'ease-out',
          });
        }, inDuration);

        setTimeout(() => {
          this.isLoading = false;
          clearInterval(interval);

          this.countryName = this.country?.name || '';
          this.countryPercentage = this.country?.percentage || 0;
        }, inDuration + outDuration);
      }
    }) as EventListener);
  }

  static styles = [
    css`
      h1 {
        font-family: 'BMkkubulim', sans-serif;
        color: #66b984;
        margin: 0.5rem 0;
      }

      p {
        margin: 0;
      }

      .info {
        margin-top: 0.5rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        & .flag-image {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 160px;
          height: 160px;
          
          & img {
            width: 100%;
            border-radius: 10px;
            border: 0 solid #66b984;
            transition: all 0.15s ease-out;

            &:hover {
              border: 4px solid #66b984;
            }
          }
        }
        
        & .country-name:not(:empty) {
          color: #578e63;
          padding: 0.5rem 0;
          font-weight: 600;
          border-bottom: 2px solid #578e63;
        }
      }
    `,
  ];
}
