import { TestBed, inject } from '@angular/core/testing';

import { GetProdDataService } from './get-prod-data.service';

describe('GetProdDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetProdDataService]
    });
  });

  it('should be created', inject([GetProdDataService], (service: GetProdDataService) => {
    expect(service).toBeTruthy();
  }));
});
