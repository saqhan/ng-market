import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCntMarketFirstPageComponent } from './ng-cnt-market-first-page.component';

describe('NgCntMarketFirstPageComponent', () => {
  let component: NgCntMarketFirstPageComponent;
  let fixture: ComponentFixture<NgCntMarketFirstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCntMarketFirstPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCntMarketFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
