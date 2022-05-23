import { TestBed } from '@angular/core/testing';

import { SelectDoctorService } from './select-doctor.service';

describe('SelectDoctorService', () => {
  let service: SelectDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
