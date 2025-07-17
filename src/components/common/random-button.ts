import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { chooseRandomCountry, fetchPopulationData, getTotalPopulation } from '@/utils/population';
import type { CountryData } from '@/types';

@customElement('random-button')
export class RandomButton extends LitElement {
  @state()
  totalPopulation: number = 0;

  @state()
  countryData: CountryData[] = [];

  render() {
    return html`
      <button
        @click=${this.handleClick}
      >부활</button>
    `;
  }

  handleClick() {
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

    this.countryData = await fetchPopulationData();
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
    }
  `;
}
