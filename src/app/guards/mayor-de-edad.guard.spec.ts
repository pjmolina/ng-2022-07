import { TestBed } from '@angular/core/testing';

import { MayorDeEdadGuard } from './mayor-de-edad.guard';

describe('MayorDeEdadGuard', () => {
  let guard: MayorDeEdadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MayorDeEdadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
