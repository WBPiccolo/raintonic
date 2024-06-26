export interface WeatherData {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units?: CurrentUnits;
    current?: CurrentWeather;
    daily_units?: DailyUnits;
    daily?: DailyWeather;
  }
  
  interface CurrentUnits {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    apparent_temperature: string;
    precipitation: string;
    rain: string;
    weather_code: string;
    surface_pressure: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
    cloud_cover: string;
    wind_gusts_10m: string;
  }
  
  interface CurrentWeather {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    rain: number;
    weather_code: number;
    surface_pressure: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    cloud_cover: number;
    wind_gusts_10m: number;
  }
  
  interface DailyUnits {
    time: string;
    weather_code: string;
  }
  
  interface DailyWeather {
    time: string[];
    weather_code: number[];
  }