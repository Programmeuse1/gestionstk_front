import { TestBed } from '@angular/core/testing';

import { CommandeclientResolveService } from './commandeclient-resolve.service';

describe('CommandeclientResolveService', () => {
  let service: CommandeclientResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeclientResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
