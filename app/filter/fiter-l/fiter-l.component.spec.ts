import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiterLComponent } from './fiter-l.component';

describe('FiterLComponent', () => {
  let component: FiterLComponent;
  let fixture: ComponentFixture<FiterLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiterLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiterLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
