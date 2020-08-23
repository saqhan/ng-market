import { Component, OnInit } from '@angular/core';
import { MarketStoreService } from '../market-store.service';

@Component({
  selector: 'app-ng-cnt-market-second-page',
  templateUrl: './ng-cnt-market-second-page.component.html',
  styleUrls: ['./ng-cnt-market-second-page.component.scss'],
})
export class NgCntMarketSecondPageComponent implements OnInit {
  constructor(private marketStore: MarketStoreService) {}

  public showModalState = false;

  ngOnInit(): void {}

  public getLogo() {
    return this.marketStore.logo;
  }

  public getPromoSliderCards() {
    return this.marketStore.promoSliderCards;
  }

  public getProductsSliderTitle() {
    return this.marketStore.productsSliderTitle;
  }

  public getProductsSliderCards() {
    return this.marketStore.productsSliderCards;
  }

  getProductsList() {
    return this.marketStore.productsList;
  }

  getRecentlyWatchedProducts() {
    return this.marketStore.recentlyWatchedProducts;
  }

  getRecentlyWatchedTitle() {
    return this.marketStore.recentlyWatchedTitle;
  }

  getProductModal() {
    return this.marketStore.productModal;
  }

  /**
   * Открытие и закрытие модального окна
   */
  public showOrCloseModal() {
    this.showModalState = !this.showModalState;
    this.bodyToggleScroll();
  }

  /**
   * Отключение и включение прокрутки body
   */
  public bodyToggleScroll() {
    if (this.showModalState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
