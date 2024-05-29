import { Component } from '@angular/core';

export interface category{
  collapsed:boolean,
  name:string,
  children:string[]
}
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  categories:category[]=[
    {
      collapsed:false,
      name:"PC",
      children:['TOSHIBA','DELL']
    },
    {
      collapsed:false,
      name:"SMARTPHONE",
      children:['NOKIA']
    },

  ]

openCategory(category: category) {
  category.collapsed=true
}
closeCategory(category: category) {
  console.log(category);

  category.collapsed=false
}
}
