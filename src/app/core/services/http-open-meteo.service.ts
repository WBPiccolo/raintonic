import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { City } from '../models/city.model';
import { SearchCityResponse } from '../models/HttpOpenMeteoService.model';

@Injectable({
  providedIn: 'root'
})
export class HttpOpenMeteoService {
  readonly ENDPOINTS = {
    search: 'https://geocoding-api.open-meteo.com/v1/search'
  }
  constructor(private http: HttpClient) { }

  search(searchTerm: string): Observable<City[]> {
    const url = this.ENDPOINTS.search;
    const params = { name: searchTerm }
    return this.http.get<SearchCityResponse>(this.ENDPOINTS.search, { params: params })
      .pipe(map(res => res.results));
  }
}
