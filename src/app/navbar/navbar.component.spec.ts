import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#toggleMenu() should toggle the navbar list when clicking ', () => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    expect(component.menuOpen)
      .withContext('menu is hided on mobile screen at first')
      .toBe(false);
    component.toggleMenu();

    expect(component.menuOpen)
      .withContext('after clicking on navbar toggle button')
      .toBe(true);
  });
});
