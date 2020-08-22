import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCntMarketHeaderComponent } from './ng-cnt-market-header.component';

describe('NgCntMarketHeaderComponent', () => {
  let component: NgCntMarketHeaderComponent;
  let fixture: ComponentFixture<NgCntMarketHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCntMarketHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCntMarketHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
