import { TestBed } from '@angular/core/testing';

import { ApiHugoService } from './api-hugo.service';

describe('ApiHugoService', () => {
  let service: ApiHugoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHugoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
