import { TestBed } from '@angular/core/testing';

import { HttpOpenMeteoService } from './http-open-meteo.service';

describe('HttpOpenMeteoService', () => {
  let service: HttpOpenMeteoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpOpenMeteoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
