import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavouriteCityWeather } from '../../../core/models/favouriteCityWeather.model';
import { City } from '../../../core/models/city.model';

@Component({
  selector: 'app-favourite-city-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourite-city-card.component.html',
  styleUrl: './favourite-city-card.component.scss'
})
export class FavouriteCityCardComponent {
  @Input() favCity: FavouriteCityWeather;

  @Output() cardClicked: EventEmitter<City> = new EventEmitter<City>();
  @Output() removeFromFavourites: EventEmitter<City> = new EventEmitter<City>();
  readonly today = new Date();
  

  onCardClick() {
    this.cardClicked.emit(this.favCity.city);
  }

  get deducedWeather() {
    const temperature = this.favCity.weatherData.current.temperature_2m;
    const humidity = this.favCity.weatherData.current.relative_humidity_2m;
    const apparentTemperature = this.favCity.weatherData.current.apparent_temperature;
    const precipitation = this.favCity.weatherData.current.precipitation;
    const cloudCover = this.favCity.weatherData.current.cloud_cover;
    const windSpeed = this.favCity.weatherData.current.wind_speed_10m;
    const windDirection = this.favCity.weatherData.current.wind_direction_10m;
    const windGusts = this.favCity.weatherData.current.wind_gusts_10m;
    const weatherCode = this.favCity.weatherData.current.weather_code;

    let skyDescription: string;
    switch (weatherCode) {
        case 1:
            skyDescription = "clear sky";
            break;
        case 2:
            skyDescription = "mostly clear";
            break;
        case 3:
            skyDescription = "partly cloudy";
            break;
        case 4:
            skyDescription = "overcast";
            break;
        default:
            skyDescription = "unknown conditions";
            break;
    }

    // Determine temperature description
    let temperatureDescription: string;
    if (temperature < 0) {
        temperatureDescription = "cold";
    } else if (temperature < 10) {
        temperatureDescription = "cool";
    } else if (temperature < 20) {
        temperatureDescription = "mild";
    } else if (temperature < 30) {
        temperatureDescription = "warm";
    } else {
        temperatureDescription = "hot";
    }

    // Determine precipitation presence
    let precipitationDescription: string = '';
    if (precipitation > 0) {
        precipitationDescription = "with precipitation";
    } else {
        precipitationDescription = "without precipitation";
    }

    // Determine wind description
    let windDescription: string;
    if (windSpeed < 5) {
        windDescription = "calm";
    } else if (windSpeed < 15) {
        windDescription = "light breeze";
    } else if (windSpeed < 30) {
        windDescription = "windy";
    } else {
        windDescription = "very windy";
    }

    // Compose the final description
    const finalDescription = `${skyDescription}, ${temperatureDescription}, ${precipitationDescription}, with ${windDescription}.`;

    return finalDescription;
}
}
