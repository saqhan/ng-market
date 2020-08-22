import { Component, OnInit } from '@angular/core';
import {MarketStoreService} from "../../market-store.service";

@Component({
  selector: 'app-ng-cnt-market-footer',
  templateUrl: './ng-cnt-market-footer.component.html',
  styleUrls: ['./ng-cnt-market-footer.component.scss']
})
export class NgCntMarketFooterComponent implements OnInit {

  constructor(private marketStore: MarketStoreService) {}

  ngOnInit(): void {
  }

  // TODO
  public getLogoFooter(){
    // return this.marketStore.getLogoFooter;
    return 'https://via.placeholder.com/200x30?text=Visit'
  }

  //
  public getMenuItemFooter() {
    return this.marketStore.getMenuItemFooter()
  }

  //
  public getFooterContactColumn() {
    return this.marketStore.getFooterContactColumn()
  }

  //
  getFooterCopyrightRow() {
    return this.marketStore.getFooterCopyrightRow()
  }

  //
  getFooterLinksPolitics() {
    return this.marketStore.getFooterLinksPolitics()
  }

}
