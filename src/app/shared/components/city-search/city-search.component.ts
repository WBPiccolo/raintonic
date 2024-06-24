import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Observable, of } from 'rxjs';
import { City } from '../../../core/models/city';

@Component({
  selector: 'app-city-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule],
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.scss'
})
export class CitySearchComponent {
  @Input() cities: City[] = [];
  
  // @Input() set cities(cities: City[]) {
  //   this._cities = cities;
  //   //this.filteredCities = cities;
  // };
  @Output() searchTermChanged = new EventEmitter<string>();
  @Output() searchByCityClicked = new EventEmitter<any>();

  /*private _cities: City[] = [];
  filteredCities: City[] = [];*/
  //filteredCities = new Observable<City[]>();

  autocompleteString: string = '';
  //autocompleteControl: FormControl = new FormControl('');

  //filteredOptions = of([])



  /*private _filter(value: string): City[] {
    console.log('_filter', value);
    const filterValue = value.toLowerCase();
    return this.filteredCities.filter(city => city.name?.toLowerCase().includes(filterValue));
  }*/

  selectOption(option: MatAutocompleteSelectedEvent) {
    console.log('selectOption', option);
  }

  displayFn(city: City): string {
    return city.name ? city.name : '';
  }

}
