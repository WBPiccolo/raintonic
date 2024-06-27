import { Component, OnInit, inject } from '@angular/core';
import { CitySearchComponent } from "./shared/components/city-search/city-search.component";
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { City } from './core/models/city.model';
import { HttpOpenMeteoService } from './core/services/http-open-meteo.service';
import { CityInfoComponent } from "./shared/components/city-info/city-info.component";
import { WeatherData } from './core/models/weatherData.model';
import { LocalStorageService } from './core/models/local-storage.service';
import { FavouriteCityWeather } from './core/models/favouriteCityWeather.model';
import { FavouriteCityCardComponent } from "./shared/components/favourite-city-card/favourite-city-card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, CitySearchComponent, CityInfoComponent, FavouriteCityCardComponent]
})
export class AppComponent implements OnInit {
  httpOpenMeteoService = inject(HttpOpenMeteoService);
  localStorageService = inject(LocalStorageService)
  cities$: Observable<City[]> = of([]);
  selectedCity: City;

  favouriteCitiesWeather$: Observable<FavouriteCityWeather[]> = new Observable<FavouriteCityWeather[]>();
  weatherData$: Observable<WeatherData> = new Observable();

  sortDirection: 'ASC' | 'DESC' = 'ASC';

  ngOnInit(): void {
    this.favouriteCitiesWeather$ = this.localStorageService.getCitiesObs().pipe(
      switchMap((cities: City[]) => this.httpOpenMeteoService.getCurrentWeatherData(cities).pipe(
        map((weatherData: WeatherData | WeatherData[]) => [].concat(weatherData)), //force to be an array
        map((weatherData: WeatherData[]) => {
          return cities.map((city, index) => ({city: city, weatherData: weatherData[index]}))
        })
      ))
    );
  }

  onSearchTermChanged(data: string | City) {
    if (data instanceof Object) {
      return;
    }
    this.cities$ = this.httpOpenMeteoService.searchCities(data);

  }

  onSearchByCityClicked(data: City) {
    this.selectedCity = data;
    this.weatherData$ = this.httpOpenMeteoService.getCurrentWeatherData(data) as Observable<WeatherData>;
  }

  addOrRemoveFromFavourites(city: City) {
    city.isFavourite = !city.isFavourite;

    if (city.isFavourite) {
      this.localStorageService.addCity(city);
    } else {
      this.localStorageService.removeCity(city);
    }
  }

  setSelectedCity(clickedCity: City){
    this.onSearchByCityClicked(clickedCity);
  }

  sortFavs() {
    this.sortDirection = this.sortDirection === 'ASC'? 'DESC' : 'ASC';
    this.favouriteCitiesWeather$ = this.favouriteCitiesWeather$.pipe(
      map(favCities => favCities.sort((a, b) => {
        return this.sortDirection === 'ASC'?  a.weatherData.current.temperature_2m - b.weatherData.current.temperature_2m : b.weatherData.current.temperature_2m - a.weatherData.current.temperature_2m 
      })),
    );
  }
  
}
