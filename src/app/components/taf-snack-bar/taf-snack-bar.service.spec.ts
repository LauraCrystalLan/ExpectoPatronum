import { TestBed } from '@angular/core/testing';

import { TafSnackBarService } from './taf-snack-bar.service';

describe('TafSnackBarService', () => {
  let service: TafSnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TafSnackBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
