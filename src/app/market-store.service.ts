import { Injectable } from '@angular/core';
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
  forApp, forSelection,
  homePageImage,
  homeText,
  homeSubText

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
}
