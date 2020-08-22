import { Component, Input, OnInit } from '@angular/core';
import { MarketStoreService } from '../../market-store.service';

@Component({
  selector: 'app-ng-cnt-market-header',
  templateUrl: './ng-cnt-market-header.component.html',
  styleUrls: ['./ng-cnt-market-header.component.scss'],
})
export class NgCntMarketHeaderComponent implements OnInit {
  constructor(private marketStore: MarketStoreService) {}

  ngOnInit(): void {}

  @Input() firstPage: boolean;


  public getLogo() {
    return this.marketStore.logo;
  }

  public getNumberHeader() {
    return this.marketStore.numberHeader;
  }

  /* Получаем данные для топ бара */
  getTopBar() {
    return this.marketStore.getTopBar();
  }

  /* Получаем данные для body header */
  getBodyHeader() {
    return this.marketStore.getBodyHeader();
  }

  //
  public getLoginUser() {
    return this.marketStore.getLoginUser();
  }

  //
  public getNavBar() {
    return this.marketStore.getNavBar();
  }

  //
  public getSelectShops() {
    return this.marketStore.getSelectShops();
  }

  //
  public getLeftMenuCatalog() {
    return this.marketStore.getLeftMenuCatalog();
  }
}
