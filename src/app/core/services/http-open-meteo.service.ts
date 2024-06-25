import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { City } from '../models/city.model';
import { SearchCityResponse } from '../models/HttpOpenMeteoService.model';
import { WeatherData } from '../models/weatherData.model';

@Injectable({
  providedIn: 'root'
})
export class HttpOpenMeteoService {
  private readonly ENDPOINTS = {
    searchCities: 'https://geocoding-api.open-meteo.com/v1/search',
    getWeatherData: 'https://api.open-meteo.com/v1/forecast'
  }
  constructor(private http: HttpClient) { }

  searchCities(searchTerm: string): Observable<City[]> {
    const url = this.ENDPOINTS.searchCities;
    const params = { name: searchTerm }
    return this.http.get<SearchCityResponse>(url, { params: params })
      .pipe(map(res => res.results));
  }

  getWeatherData(city: City): Observable<WeatherData> {
    const url = this.ENDPOINTS.getWeatherData;
    const params = {
      latitude: city.latitude,
      longitude: city.longitude,
      current: 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m',
      daily: 'weather_code',
      forecast_days: 1
    }

    return this.http.get<WeatherData>(url, {params: params});
  }
}
