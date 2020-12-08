import { TestBed } from '@angular/core/testing';

import { UserHospProviderService } from './user-hosp-provider.service';

describe('UserHospProviderService', () => {
  let service: UserHospProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHospProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
