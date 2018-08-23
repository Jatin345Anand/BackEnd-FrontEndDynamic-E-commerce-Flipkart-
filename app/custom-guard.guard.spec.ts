import { TestBed, async, inject } from '@angular/core/testing';

import { CustomGuardGuard } from './custom-guard.guard';

describe('CustomGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomGuardGuard]
    });
  });

  it('should ...', inject([CustomGuardGuard], (guard: CustomGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
