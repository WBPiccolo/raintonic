import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../../../core/models/city.model';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../../../core/models/weatherData.model';
import { MatIconModule } from '@angular/material/icon';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
    selector: 'app-city-info',
    standalone: true,
    imports: [CommonModule, MatIconModule, NgxChartsModule],
    templateUrl: './city-info.component.html',
    styleUrl: './city-info.component.scss'
})
export class CityInfoComponent {
    @Input() city: City;
    @Input() weatherData: WeatherData;
    @Input() set forecastData(forecast: WeatherData) {
        if (!forecast) {
            this.forecastChartData = [];
        }

        this.forecastChartData = [
            { name: 'Max temp', series: forecast.daily.temperature_2m_max.map((temp, index) => ({ value: temp, name: index })) },
            { name: 'Min temp', series: forecast.daily.temperature_2m_min.map((temp, index) => ({ value: temp, name: index })) }
        ];
    }

    @Output() addToFavouritesClicked: EventEmitter<MouseEvent> = new EventEmitter();

    forecastChartData = [];

    chartSize: [number, number] = [700, 300];
    // options
    legend: boolean = true;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    timeline: boolean = true;

    get formattedLocationData() {
        const formattedAdmin: string[] = [this.city.admin3, this.city.admin2, this.city.admin1, this.city.country]
            .filter(admin => admin && admin.toLowerCase() != this.city.name.toLowerCase());
        const set = new Set(formattedAdmin);
        return Array.from(set).join(', ');
    }

    getFormattedOptionalWeatherData(type: string) {
        const label: string = type.charAt(0).toUpperCase() + type.slice(1);
        const value = this.weatherData.current[type];
        const unit = this.weatherData.current_units[type];

        return value ? `${label} ${value}${unit}` : '';
    }

    get deducedWeather() {
        const temperature = this.weatherData.current.temperature_2m;
        const humidity = this.weatherData.current.relative_humidity_2m;
        const apparentTemperature = this.weatherData.current.apparent_temperature;
        const precipitation = this.weatherData.current.precipitation;
        const cloudCover = this.weatherData.current.cloud_cover;
        const windSpeed = this.weatherData.current.wind_speed_10m;
        const windDirection = this.weatherData.current.wind_direction_10m;
        const windGusts = this.weatherData.current.wind_gusts_10m;
        const weatherCode = this.weatherData.current.weather_code;

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
