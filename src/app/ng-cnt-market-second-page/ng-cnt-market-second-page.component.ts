import { Component, OnInit } from '@angular/core';
import {MarketStoreService} from "../market-store.service";

@Component({
  selector: 'app-ng-cnt-market-second-page',
  templateUrl: './ng-cnt-market-second-page.component.html',
  styleUrls: ['./ng-cnt-market-second-page.component.scss']
})
export class NgCntMarketSecondPageComponent implements OnInit {

  constructor(private marketStore: MarketStoreService) {}

  ngOnInit(): void {
  }

  public getLogo() {
    return this.marketStore.logo;
  }

}
