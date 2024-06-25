import { Injectable } from '@angular/core';
import { City } from './city.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly localStorageName: string = 'raintonic_favourites_cities'
  private cities: BehaviorSubject<City[]> = new BehaviorSubject<City[]>(this._getCitiesFromLocalStorage());

  constructor() { }

  getCitiesObs(): Observable<City[]> {
    return this.cities as Observable<City[]>;
  }

  saveCities(cities: City[]) {
    localStorage.setItem(this.localStorageName, JSON.stringify(cities));
    this.cities.next(this._getCitiesFromLocalStorage())
  }

  addCity(city: City) {
    let cities: City[] = this._getCitiesFromLocalStorage();

    if (cities?.findIndex(c => c.id === city.id) >= 0) { //la città è già presente
      return;
    }

    cities.push(city);
    this.saveCities(cities);
  }

  removeCity(city: City) {
    let cities: City[] = this._getCitiesFromLocalStorage().filter(c => c.id != city.id);

    this.saveCities(cities);
  }

  private _getCitiesFromLocalStorage(): City[] {
    const localStorageItem: string = localStorage.getItem(this.localStorageName);
    const citiesArray: City[] = JSON.parse(localStorageItem) as City[] || [];
    return citiesArray;
  }
}
