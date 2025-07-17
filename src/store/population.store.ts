import type { CountryData } from '@/types';

class PopulationStore extends EventTarget {
  private static _instance: PopulationStore;

  public countries: readonly CountryData[] = [];
  public isLoading = true;
  public error: string | null = null;

  private _dataPromise: Promise<void> | null = null;

  private constructor() {
    super();
  }

  public static get instance(): PopulationStore {
    if (!PopulationStore._instance) {
      PopulationStore._instance = new PopulationStore();
    }
    return PopulationStore._instance;
  }

  public loadData(): Promise<void> {
    if (!this._dataPromise) {
      this._dataPromise = fetch(import.meta.env.BASE_URL + 'data/population.json')
        .then(response => {
          if (!response.ok) throw new Error(`HTTP 오류! 상태: ${response.status}`);
          return response.json();
        })
        .then(data => (this.countries = Object.freeze(data)))
        .catch(err => (this.error = err.message))
        .finally(() => {
          this.isLoading = false;
          this.dispatchEvent(new CustomEvent('updated'));
        });
    }
    return this._dataPromise;
  }
}

export const populationStore = PopulationStore.instance;