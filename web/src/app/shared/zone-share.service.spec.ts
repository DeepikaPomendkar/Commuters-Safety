import { TestBed } from '@angular/core/testing';

import { ZoneShareService } from './zone-share.service';

describe('ZoneShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZoneShareService = TestBed.get(ZoneShareService);
    expect(service).toBeTruthy();
  });
});
