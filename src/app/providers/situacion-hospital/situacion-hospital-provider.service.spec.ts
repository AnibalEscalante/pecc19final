import { TestBed } from '@angular/core/testing';

import { SituacionHospitalProviderService } from './situacion-hospital-provider.service';

describe('SituacionHospitalProviderService', () => {
  let service: SituacionHospitalProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SituacionHospitalProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
