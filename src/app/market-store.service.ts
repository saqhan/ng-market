import { Injectable } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import {
  header,
  forOffer,
  offerTitleText,
  forStatistics,
  delivery,
  forChoice,
  choiceTitleText,
  forSpecialist,
  forCourier,
  forApp,
  forSelection,
  homePageImage,
  homeText,
  homeSubText,
  footerData,
  promoSliderCards,
  productsSliderCards,
  productsSliderTitle,
  productsList,
  recentlyWatchedProducts,
  recentlyWatchedTitle,
  productModal,
} from './mock';

@Injectable({
  providedIn: 'root',
})
export class MarketStoreService {
  constructor() {}

  public logo = header.body.logo;

  public numberHeader = header.numberHeader;

  public forOffer = forOffer;

  public offerTitleText = offerTitleText;

  public forStatistics = forStatistics;

  public delivery = delivery;

  public forChoice = forChoice;

  public choiceTitleText = choiceTitleText;

  public forSpecialist = forSpecialist;

  public forCourier = forCourier;

  public forApp = forApp;

  public forSelection = forSelection;

  public homePageImage = homePageImage;

  public homeText = homeText;

  public homeSubText = homeSubText;

  /**
   * Вторая страница
   */
  public promoSliderCards = promoSliderCards;

  public productsSliderCards = productsSliderCards;

  public productsSliderTitle = productsSliderTitle;

  public productsList = productsList;

  public recentlyWatchedProducts = recentlyWatchedProducts;

  public recentlyWatchedTitle = recentlyWatchedTitle;

  public productModal = productModal;

  //  сайхан
  //

  public getLogoFooter() {
    return footerData.logoFooter;
  }

  //
  public getMenuItemFooter() {
    return footerData.footerMenu;
  }

  //
  public getFooterContactColumn() {
    return footerData.footerContactColumn;
  }

  getFooterCopyrightRow() {
    return footerData.footerCopyrightRow;
  }
  getFooterLinksPolitics() {
    return footerData.footerLinksPolitics;
  }

  public getTopBar() {
    return header.topBar;
  }
  //
  public getBodyHeader() {
    return header.body;
  }

  //
  getLoginUser() {
    return true;
  }

  //
  getNavBar() {
    return header.navBar;
  }

  //
  getSelectShops() {
    return header.selectShops;
  }

  //
  getLeftMenuCatalog() {
    return header.leftMenuCatalog;
  }
}
