import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

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
  it('navigation should be responsive', () => {

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    const bannerDe: DebugElement = fixture.debugElement;
    const anchorTags = bannerDe.query(By.css('a'));
    expect(anchorTags)
    .withContext("before resizing window there is no anchor tags")
    .toBeNull;

    /**
     * when resizing window
     */
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 150,
    });
    window.dispatchEvent(new Event('resize'));


    fixture.detectChanges();
    const anchorTagsAfterResize = bannerDe.query(By.css('a'));

     expect(anchorTags)
    .withContext("after resizing window anchor tags should exist")
    .toBeTruthy
  });
});
