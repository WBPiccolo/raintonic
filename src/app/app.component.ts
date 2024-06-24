import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CitySearchComponent } from "./shared/components/city-search/city-search.component";
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { City } from './core/models/city';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, CitySearchComponent]
})
export class AppComponent {
    cities: Observable<City[]> = of([
          {
            "id": 4469146,
            "name": "Greensboro",
            "latitude": 36.07264,
            "longitude": -79.79198,
            "elevation": 266.0,
            "feature_code": "PPL",
            "country_code": "US",
            "admin1_id": 4482348,
            "admin2_id": 4469393,
            "admin3_id": 4480164,
            "timezone": "America/New_York",
            "population": 285342,
            "postcodes": [
              "27401",
              "27402",
              "27403",
              "27404",
              "27405",
              "27406",
              "27407",
              "27408",
              "27409",
              "27410",
              "27411",
              "27412",
              "27413",
              "27415",
              "27416",
              "27417",
              "27419",
              "27420",
              "27425",
              "27427",
              "27429",
              "27435",
              "27438",
              "27455",
              "27495",
              "27498",
              "27499"
            ],
            "country_id": 6252001,
            "country": "United States",
            "admin1": "North Carolina",
            "admin2": "Guilford",
            "admin3": "Morehead Township"
          },
          {
            "id": 390903,
            "name": "Greece",
            "latitude": 39.0,
            "longitude": 22.0,
            "elevation": 644.0,
            "feature_code": "PCLI",
            "country_code": "GR",
            "timezone": "Europe/Athens",
            "population": 10727668,
            "country_id": 390903,
            "country": "Greece"
          },
          {
            "id": 5577592,
            "name": "Greeley",
            "latitude": 40.42331,
            "longitude": -104.70913,
            "elevation": 1425.0,
            "feature_code": "PPLA2",
            "country_code": "US",
            "admin1_id": 5417618,
            "admin2_id": 5583239,
            "timezone": "America/Denver",
            "population": 100883,
            "postcodes": [
              "80631",
              "80632",
              "80633",
              "80634",
              "80638",
              "80639"
            ],
            "country_id": 6252001,
            "country": "United States",
            "admin1": "Colorado",
            "admin2": "Weld"
          },
          {
            "id": 4580599,
            "name": "Greer",
            "latitude": 34.93873,
            "longitude": -82.22706,
            "elevation": 312.0,
            "feature_code": "PPL",
            "country_code": "US",
            "admin1_id": 4597040,
            "admin2_id": 4580549,
            "timezone": "America/New_York",
            "population": 28365,
            "postcodes": [
              "29650",
              "29651",
              "29652"
            ],
            "country_id": 6252001,
            "country": "United States",
            "admin1": "South Carolina",
            "admin2": "Greenville"
          },
          {
            "id": 5156371,
            "name": "Green",
            "latitude": 40.94589,
            "longitude": -81.48317,
            "elevation": 347.0,
            "feature_code": "PPL",
            "country_code": "US",
            "admin1_id": 5165418,
            "admin2_id": 5173386,
            "timezone": "America/New_York",
            "population": 25898,
            "postcodes": [
              "44232"
            ],
            "country_id": 6252001,
            "country": "United States",
            "admin1": "Ohio",
            "admin2": "Summit"
          },
          {
            "id": 4272358,
            "name": "Green",
            "latitude": 39.42778,
            "longitude": -97.00196,
            "elevation": 421.0,
            "feature_code": "PPL",
            "country_code": "US",
            "admin1_id": 4273857,
            "admin2_id": 4269648,
            "admin3_id": 4272969,
            "timezone": "America/Chicago",
            "population": 128,
            "postcodes": [
              "67447"
            ],
            "country_id": 6252001,
            "country": "United States",
            "admin1": "Kansas",
            "admin2": "Clay",
            "admin3": "Highland Township"
          },
          {
            "id": 5296856,
            "name": "Greer",
            "latitude": 34.01005,
            "longitude": -109.4587,
            "elevation": 2547.0,
            "feature_code": "PPL",
            "country_code": "US",
            "admin1_id": 5551752,
            "admin2_id": 5551519,
            "timezone": "America/Phoenix",
            "population": 41,
            "postcodes": [
              "85927"
            ],
            "country_id": 6252001,
            "country": "United States",
            "admin1": "Arizona",
            "admin2": "Apache"
          },
          {
            "id": 4137143,
            "name": "Wright",
            "latitude": 34.4351,
            "longitude": -92.06625,
            "elevation": 67.0,
            "feature_code": "PPL",
            "country_code": "US",
            "admin1_id": 4099753,
            "admin2_id": 4116433,
            "admin3_id": 4102559,
            "timezone": "America/Chicago",
            "postcodes": [
              "72182"
            ],
            "country_id": 6252001,
            "country": "United States",
            "admin1": "Arkansas",
            "admin2": "Jefferson",
            "admin3": "Bolivar Township"
          },
          {
            "id": 5729293,
            "name": "Green",
            "latitude": 43.16039,
            "longitude": -123.36785,
            "elevation": 157.0,
            "feature_code": "PPL",
            "country_code": "US",
            "admin1_id": 5744337,
            "admin2_id": 5723759,
            "timezone": "America/Los_Angeles",
            "population": 7515,
            "country_id": 6252001,
            "country": "United States",
            "admin1": "Oregon",
            "admin2": "Douglas"
          },
          {
            "id": 5254962,
            "name": "Green Bay",
            "latitude": 44.51916,
            "longitude": -88.01983,
            "elevation": 180.0,
            "feature_code": "PPLA2",
            "country_code": "US",
            "admin1_id": 5279468,
            "admin2_id": 5246898,
            "admin3_id": 5254974,
            "timezone": "America/Chicago",
            "population": 105207,
            "postcodes": [
              "54301",
              "54302",
              "54303",
              "54304",
              "54305",
              "54306",
              "54307",
              "54308",
              "54311",
              "54313",
              "54324",
              "54344"
            ],
            "country_id": 6252001,
            "country": "United States",
            "admin1": "Wisconsin",
            "admin2": "Brown",
            "admin3": "City of Green Bay"
          }
        ])

    onSearchTermChanged(data: string) {
        console.log('onSearchTErmChanged', data);
    }

    onSearchByCityClicked(data: any) {
        console.log('onSearchByCityClicked', data);

    }
}
