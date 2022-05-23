import { TestBed } from '@angular/core/testing';

import { CreatePatientsService } from './create-patients.service';

describe('CreatePatientsService', () => {
  let service: CreatePatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
