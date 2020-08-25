import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCntMarketFirstPageComponent } from './ng-cnt-market-first-page/ng-cnt-market-first-page.component';
import { NgCntMarketSecondPageComponent } from './ng-cnt-market-second-page/ng-cnt-market-second-page.component';
import { NgCntMarketHeaderComponent } from './shared/ng-cnt-market-header/ng-cnt-market-header.component';
import { NgCntMarketFooterComponent } from './shared/ng-cnt-market-footer/ng-cnt-market-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NgCntMarketFirstPageComponent,
    NgCntMarketSecondPageComponent,
    NgCntMarketHeaderComponent,
    NgCntMarketFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
