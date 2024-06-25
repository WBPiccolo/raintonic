import { Injectable } from '@angular/core';
import { City } from './city.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly localStorageName: string = 'raintonic_favourites_cities'
  constructor() { }

  getCities(): City[] {
    const localStorageItem: string = localStorage.getItem(this.localStorageName);
    return JSON.parse(localStorageItem) as City[] || [];
  }

  saveCities(cities: City[]) {
    localStorage.setItem(this.localStorageName, JSON.stringify(cities));
  }

  addCity(city: City) {
    let cities: City[] = this.getCities();

    if (cities?.findIndex(c => c.id === city.id) >= 0) { //la città è già presente
      return;
    }

    cities.push(city);
    this.saveCities(cities);
  }

  removeCity(city: City) {
    let cities: City[] = this.getCities().filter(c => c.id != city.id);

    this.saveCities(cities);
  }
}
