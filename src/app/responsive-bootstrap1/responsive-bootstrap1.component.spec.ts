import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveBootstrap1Component } from './responsive-bootstrap1.component';

describe('ResponsiveBootstrap1Component', () => {
  let component: ResponsiveBootstrap1Component;
  let fixture: ComponentFixture<ResponsiveBootstrap1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveBootstrap1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveBootstrap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
