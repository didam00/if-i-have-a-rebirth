import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { chooseRandomCountry, getTotalPopulation } from '@/utils/population';
import { populationStore } from '@/store/population.store';
import type { CountryData } from '@/types';

@customElement('random-button')
export class RandomButton extends LitElement {
  @state()
  totalPopulation: number = 0;

  @state()
  countryData: CountryData[] = [];

  @property({ type: Boolean })
  disabled: boolean = false;

  render() {
    return html`
      <button
        @click=${this.handleClick}
        ?disabled=${this.disabled}
      >부활</button>
    `;
  }

  handleClick() {
    if (this.disabled || populationStore.isLoading) return; // 로딩 중일 때 클릭 방지

    const country = chooseRandomCountry(this.countryData);
    
    const event = new CustomEvent('country-selected', {
      bubbles: true,
      composed: true,
      detail: {
        country: country,
      },
    });

    this.dispatchEvent(event);
  }

  async connectedCallback() {
    super.connectedCallback();

    // 데이터 로딩
    await populationStore.loadData();
    this.countryData = Array.from(populationStore.countries);
    this.totalPopulation = getTotalPopulation(this.countryData);
  }
  
  static styles = css`
    button {
      font-family: 'BMkkubulim', sans-serif;
      background-color: #66b984;
      box-shadow: 0 8px 0 0 #42905f;
      color: white;
      border: none;
      transition: all 0.1s ease-in-out;
      
      margin: 1rem 0;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border-radius: 0.5rem;

      cursor: pointer;

      &:hover {
        transform: translateY(2px);
        box-shadow: 0 6px 0 0 #42905f;
      }
      
      &:active {
        transform: translateY(8px);
        box-shadow: 0 0 0 0 #42905f;
        background-color: #578e63;
      }

      &:disabled {
        background: #42905f;
        box-shadow: 0 8px 0 0 #214530;
        cursor: not-allowed;

        &:hover {
          transform: translateY(0);
        }
      }
    }
  `;
}
