import { City } from "./city.model";

export interface SearchCityResponse {
    generationtime_ms: number,
    results: City[]
}