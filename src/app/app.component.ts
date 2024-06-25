import { Component, inject } from '@angular/core';
import { CitySearchComponent } from "./shared/components/city-search/city-search.component";
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { City } from './core/models/city.model';
import { HttpOpenMeteoService } from './core/services/http-open-meteo.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, CitySearchComponent]
})
export class AppComponent {
  httpOpenMeteoService = inject(HttpOpenMeteoService);

    cities: Observable<City[]> = of([]);

    onSearchTermChanged(data: string | City) {
        if(data instanceof Object) {
          return;
        }
        this.cities = this.httpOpenMeteoService.search(data);

    }

    onSearchByCityClicked(data: any) {
        console.log('onSearchByCityClicked', data);
    }
}
