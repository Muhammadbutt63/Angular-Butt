import { TestBed } from '@angular/core/testing';

import { DatamanagementService } from './datamanagement.service';

describe('DatamanagementService', () => {
  let service: DatamanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
