import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiterRComponent } from './fiter-r.component';

describe('FiterRComponent', () => {
  let component: FiterRComponent;
  let fixture: ComponentFixture<FiterRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiterRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiterRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
