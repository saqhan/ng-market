import { TestBed } from '@angular/core/testing';

import { MarketStoreService } from './market-store.service';

describe('MarketStoreService', () => {
  let service: MarketStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
