import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbmNavbarComponent } from './rbm-navbar.component';

describe('RbmNavbarComponent', () => {
  let component: RbmNavbarComponent;
  let fixture: ComponentFixture<RbmNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbmNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbmNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
