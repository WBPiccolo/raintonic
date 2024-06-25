import { City } from "./city.model";
import { WeatherData } from "./weatherData.model";

export interface FavouriteCityWeather {
    city: City,
    weatherData: WeatherData
}