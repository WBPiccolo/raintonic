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
  time: string,
  weather_code: string,
  temperature_2m_max: string,
  temperature_2m_min: string,
  apparent_temperature_max: string,
  apparent_temperature_min: string,
  sunrise: string,
  sunset: string,
  daylight_duration: string,
  sunshine_duration: string,
  uv_index_max: string,
  uv_index_clear_sky_max: string,
  precipitation_sum: string,
  rain_sum: string,
  showers_sum: string,
  snowfall_sum: string,
  precipitation_hours: string,
  precipitation_probability_max: string
  wind_speed_10m_max: string,
  wind_gusts_10m_max: string,
  wind_direction_10m_dominant: string,
  shortwave_radiation_sum: string,
  et0_fao_evapotranspiration: string,
}

interface DailyWeather {
  time: string[],
  weather_code: number[],
  temperature_2m_max: number[],
  temperature_2m_min: number[],
  apparent_temperature_max: number[],
  apparent_temperature_min: number[],
  sunrise: string[],
  sunset: string[],
  daylight_duration: number[],
  sunshine_duration: number[],
  uv_index_max: number[],
  uv_index_clear_sky_max: number[],
  precipitation_sum: number[],
  rain_sum: number[],
  showers_sum: number[],
  snowfall_sum: number[],
  precipitation_hours: number[],
  precipitation_probability_max: number[],
  wind_speed_10m_max: number[],
  wind_gusts_10m_max: number[],
  wind_direction_10m_dominant: number[],
  shortwave_radiation_sum: number[],
  et0_fao_evapotranspiration: number[]
}
