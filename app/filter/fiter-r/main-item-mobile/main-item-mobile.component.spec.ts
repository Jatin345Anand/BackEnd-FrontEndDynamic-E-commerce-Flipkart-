import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemMobileComponent } from './main-item-mobile.component';

describe('MainItemMobileComponent', () => {
  let component: MainItemMobileComponent;
  let fixture: ComponentFixture<MainItemMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainItemMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainItemMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
