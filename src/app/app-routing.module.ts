import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgCntMarketFirstPageComponent} from './ng-cnt-market-first-page/ng-cnt-market-first-page.component';
import {NgCntMarketSecondPageComponent} from './ng-cnt-market-second-page/ng-cnt-market-second-page.component';

const routes: Routes = [
  {
    path: '',
    component: NgCntMarketFirstPageComponent,
  },
  {
    path: 'second',
    component: NgCntMarketSecondPageComponent,
  },
  {
    path: '**',
    component: NgCntMarketFirstPageComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
