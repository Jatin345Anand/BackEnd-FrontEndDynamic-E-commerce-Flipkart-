import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRICEComponent } from './price.component';

describe('PRICEComponent', () => {
  let component: PRICEComponent;
  let fixture: ComponentFixture<PRICEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRICEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRICEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
