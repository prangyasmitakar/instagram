import { TestBed } from '@angular/core/testing';

import { MyfileService } from './myfile.service';

describe('MyfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyfileService = TestBed.get(MyfileService);
    expect(service).toBeTruthy();
  });
});
