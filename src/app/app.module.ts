import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCntMarketFirstPageComponent } from './ng-cnt-market-first-page/ng-cnt-market-first-page.component';
import { NgCntMarketSecondPageComponent } from './ng-cnt-market-second-page/ng-cnt-market-second-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NgCntMarketFirstPageComponent,
    NgCntMarketSecondPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
