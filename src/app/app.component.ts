import { Component, OnInit, inject } from '@angular/core';
import { CitySearchComponent } from "./shared/components/city-search/city-search.component";
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { City } from './core/models/city.model';
import { HttpOpenMeteoService } from './core/services/http-open-meteo.service';
import { CityInfoComponent } from "./shared/components/city-info/city-info.component";
import { WeatherData } from './core/models/weatherData.model';
import { LocalStorageService } from './core/models/local-storage.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, CitySearchComponent, CityInfoComponent]
})
export class AppComponent implements OnInit{
  httpOpenMeteoService = inject(HttpOpenMeteoService);
  localStorageService = inject(LocalStorageService)
  cities$: Observable<City[]> = of([]);
  selectedCity: City;

  favouriteCities$: Observable<City[]> = new Observable<City[]>();
  weatherData$: Observable<WeatherData> = new Observable();

  ngOnInit(): void {
    this.favouriteCities$ = this.localStorageService.getCitiesObs();
  }

  onSearchTermChanged(data: string | City) {
    if (data instanceof Object) {
      return;
    }
    this.cities$ = this.httpOpenMeteoService.searchCities(data);

  }

  onSearchByCityClicked(data: City) {
    this.selectedCity = data;
    this.weatherData$ = this.httpOpenMeteoService.getCurrentWeatherData(data);
  }

  addOrRemoveFromFavourites(city: City) {
    city.isFavourite = !city.isFavourite;

    if(city.isFavourite) {
      this.localStorageService.addCity(city);
    } else {
      this.localStorageService.removeCity(city);
    }
    //TODO: Localstorage service
  }
}
