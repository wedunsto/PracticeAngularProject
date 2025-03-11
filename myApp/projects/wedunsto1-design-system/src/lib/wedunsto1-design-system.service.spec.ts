import { TestBed } from '@angular/core/testing';

import { Wedunsto1DesignSystemService } from './wedunsto1-design-system.service';

describe('Wedunsto1DesignSystemService', () => {
  let service: Wedunsto1DesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Wedunsto1DesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
