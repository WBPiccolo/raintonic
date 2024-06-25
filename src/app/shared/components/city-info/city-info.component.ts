import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../../../core/models/city.model';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../../../core/models/weatherData.model';

@Component({
  selector: 'app-city-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-info.component.html',
  styleUrl: './city-info.component.scss'
})
export class CityInfoComponent {
  @Input() city: City;
  @Input() weather: WeatherData;
  @Output() addToFavouritesClicked: EventEmitter<MouseEvent> = new EventEmitter();
  

  get formattedLocationData() {
    //TODO: concatenare admin1, admin2, admin 3 e country, skippando quelli uguali
    const formattedAdmin: string[] = [this.city.admin3, this.city.admin2, this.city.admin1].filter(admin => admin && admin.toLowerCase() != this.city.name.toLowerCase());
    const set = new Set(formattedAdmin);
    return `${Array.from(set).join(', ')}, ${this.city.country}`;
  }
}
