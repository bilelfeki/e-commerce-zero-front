import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavbarComponent {
  menuOpen = true;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  navItems = [
    { name: 'SIGN IN | REGISTER', icon: 'fas fa-user' },
    { name: '  WHICH LIST', icon: 'fas fa-heart' },
  ];
  }
