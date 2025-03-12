import { TestBed } from '@angular/core/testing';

import { TpiAppDesignSystemService } from './tpi-app-design-system.service';

describe('TpiAppDesignSystemService', () => {
  let service: TpiAppDesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TpiAppDesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
