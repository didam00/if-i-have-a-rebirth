import type { CountryData } from '@/types';

export async function fetchPopulationData(): Promise<CountryData[]> {
  const res = await fetch('/data/population.json');
  if (!res.ok) {
    throw new Error(`Failed to fetch population data: ${res.statusText}`);
  }
  return res.json();
}

export function getTotalPopulation(countryData: CountryData[]): number {
  return countryData.reduce((acc, curr) => acc + curr.population, 0);
}

export function chooseRandomCountry(countryData: CountryData[]): CountryData {
  const totalPopulation = getTotalPopulation(countryData);
  let randomNumber = Math.floor(Math.random() * totalPopulation);

  for (const country of countryData) {
    randomNumber -= country.population;

    if (randomNumber < country.population) {
      return country;
    }
  }

  return countryData[0];
}