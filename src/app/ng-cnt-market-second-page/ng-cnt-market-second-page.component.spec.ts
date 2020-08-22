import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCntMarketSecondPageComponent } from './ng-cnt-market-second-page.component';

describe('NgCntMarketSecondPageComponent', () => {
  let component: NgCntMarketSecondPageComponent;
  let fixture: ComponentFixture<NgCntMarketSecondPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCntMarketSecondPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCntMarketSecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
