import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item1MComponent } from './item1-m.component';

describe('Item1MComponent', () => {
  let component: Item1MComponent;
  let fixture: ComponentFixture<Item1MComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item1MComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item1MComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
