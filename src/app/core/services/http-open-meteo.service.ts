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

  getCurrentWeatherData(cities: City | City[]): Observable<WeatherData | WeatherData[]> {
    const url = this.ENDPOINTS.getWeatherData;
    let latitudes
    let longitudes
    if (Array.isArray(cities)) {
      latitudes = cities.map(city => city.latitude).join(',');
      longitudes = cities.map(city => city.longitude).join(',');
    } else {
      latitudes = cities.latitude
      longitudes = cities.longitude;
    }

    const params = {
      latitude: latitudes,
      longitude: longitudes,
      current: 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m'
    }

    return this.http.get<WeatherData | WeatherData[]>(url, { params: params });
  }

  getDailyWeatherData(cities: City | City[]): Observable<WeatherData | WeatherData[]> {
    let latitudes
    let longitudes
    if (Array.isArray(cities)) {
      latitudes = cities.map(city => city.latitude).join(',');
      longitudes = cities.map(city => city.longitude).join(',');
    } else {
      latitudes = cities.latitude
      longitudes = cities.longitude;
    }
    const url = this.ENDPOINTS.getWeatherData;
    const params = {
      latitude: latitudes,
      longitude: longitudes,
      daily: 'weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration'
    }

    return this.http.get<WeatherData | WeatherData[]>(url, { params: params })
  }
}
