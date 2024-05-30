import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

export interface category {
  collapsed: boolean;
  name: string;
  children: string[];
}
@Component({
  selector: 'app-category-list',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('2s')
      ]),
    ]),
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  categories: category[] = [
    {
      collapsed: false,
      name: 'PC',
      children: ['TOSHIBA', 'DELL'],
    },
    {
      collapsed: false,
      name: 'SMARTPHONE',
      children: ['NOKIA'],
    },
    {
      collapsed: false,
      name: 'PC',
      children: ['TOSHIBA', 'DELL'],
    },
    {
      collapsed: false,
      name: 'SMARTPHONE',
      children: ['NOKIA'],
    },
  ];

  openCategory(category: category) {
    setTimeout(() => (category.collapsed = true), 200);
  }
  closeCategory(category: category) {
    setTimeout(() => (category.collapsed = false), 200);
  }
}
