import { Component, Input, OnInit } from '@angular/core';
import { MarketStoreService } from '../market-store.service';

@Component({
  selector: 'app-ng-cnt-market-first-page',
  templateUrl: './ng-cnt-market-first-page.component.html',
  styleUrls: ['./ng-cnt-market-first-page.component.scss'],
})
export class NgCntMarketFirstPageComponent implements OnInit {

  constructor(private marketStore: MarketStoreService) {}

  ngOnInit(): void {}

  public getLogo() {
    return this.marketStore.logo;
  }

  public getNumberHeader() {
    this.marketStore.numberHeader
  }
}
