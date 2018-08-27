import { TestBed, inject } from '@angular/core/testing';

import { MoviesServiceService } from './movie-service.service';

describe('MovieServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesServiceService]
    });
  });

  it('should be created', inject([MoviesServiceService], (service: MoviesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
