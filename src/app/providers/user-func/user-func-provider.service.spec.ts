import { TestBed } from '@angular/core/testing';

import { UserFuncProviderService } from './user-func-provider.service';

describe('UserFuncProviderService', () => {
  let service: UserFuncProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFuncProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
