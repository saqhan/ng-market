import { Injectable } from '@angular/core';
import { header } from './mock';

@Injectable({
  providedIn: 'root',
})
export class MarketStoreService {
  constructor() {}

  public logo = header.body.logo;

  public numberHeader = header.numberHeader;


}
