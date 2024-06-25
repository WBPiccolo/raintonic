import { Component, OnInit, inject } from '@angular/core';
import { CitySearchComponent } from "./shared/components/city-search/city-search.component";
import { Observable, map, of, switchMap, tap } from 'rxjs';
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

  favouriteCitiesWeather$: Observable<WeatherData[]> = new Observable<WeatherData[]>();
  weatherData$: Observable<WeatherData> = new Observable();

  ngOnInit(): void {
    this.favouriteCitiesWeather$ = this.localStorageService.getCitiesObs().pipe(
      switchMap(cities => this.httpOpenMeteoService.getDailyWeatherData(cities).pipe(
        map(weatherData => [].concat(weatherData))
      ))
    )
    /*this.localStorageService.getCitiesObs().subscribe(cities => {
      this.httpOpenMeteoService.getDailyWeatherData(cities).subscribe(weatherData => {
        console.log('favourites weather data,', weatherData)
      })
    });*/
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

    if(city.isFavourite) {
      this.localStorageService.addCity(city);
    } else {
      this.localStorageService.removeCity(city);
    }
    //TODO: Localstorage service
  }
}
