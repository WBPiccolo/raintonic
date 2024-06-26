import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { Observable, Subject, of, takeUntil } from 'rxjs';
import { City } from '../../../core/models/city.model';

@Component({
  selector: 'app-city-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.scss'
})
export class CitySearchComponent implements OnInit, OnDestroy {
  @Input() cities: City[] = [];

  @Output() searchTermChanged = new EventEmitter<string>();
  @Output() searchByCityClicked = new EventEmitter<City>();

  autocompleteFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(2)]);

  selectedCity: City = null;

  private destroy$ = new Subject<boolean>();

  ngOnInit(): void {
    this.autocompleteFormControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(newVal => {
      this.selectedCity = null;
      this.searchTermChanged.emit(newVal);
    })
  }

  emitSearchByCityClicked() {
    this.searchByCityClicked.emit(this.selectedCity);
  }

  selectOption(option: MatAutocompleteSelectedEvent) {
    this.selectedCity = option.option.value;
  }

  displayFn(city: City): string {
    return city?.name ? `${city.name} (${city.country})` : '';
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
