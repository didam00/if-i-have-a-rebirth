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
    "year": 2025
  };

  render() {
    console.log(this.country);

    return html`
      <div class="container">
        <h1>다시 태어날거야</h1>
        <p>실제 국가별 인구 수와 소득 비율을 고려하여 다시 태어나면 어디서 태어날 지 랜덤으로 보여줍니다!</p>
        <random-button>
          <p>이거 왜 안불러와짐?</p>
        </random-button>
        <div class="info">
          <div class="country-name">${this.country ? `${this.country.name} (${this.country.percentage}%)` : ''}</div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this.addEventListener('country-selected', ((event: CustomEvent) => {
      const { country } = event.detail;
      this.country = country;
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

        & div:not(:empty) {
          color: #578e63;
          padding: 0.5rem 0;
          font-weight: 600;
          border-bottom: 2px solid #578e63;
        }

        & .country-name {

        }
      }
    `,
  ];
}
