import { TestBed } from '@angular/core/testing';

import { CmdfrsService } from './cmdfrs.service';

describe('CmdfrsService', () => {
  let service: CmdfrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmdfrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
