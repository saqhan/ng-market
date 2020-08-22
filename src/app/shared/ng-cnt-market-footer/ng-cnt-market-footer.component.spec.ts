import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCntMarketFooterComponent } from './ng-cnt-market-footer.component';

describe('NgCntMarketFooterComponent', () => {
  let component: NgCntMarketFooterComponent;
  let fixture: ComponentFixture<NgCntMarketFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCntMarketFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCntMarketFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
