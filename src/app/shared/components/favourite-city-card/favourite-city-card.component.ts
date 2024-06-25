import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FavouriteCityWeather } from '../../../core/models/favouriteCityWeather.model';

@Component({
  selector: 'app-favourite-city-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourite-city-card.component.html',
  styleUrl: './favourite-city-card.component.scss'
})
export class FavouriteCityCardComponent {
  @Input() favCity: FavouriteCityWeather
}
