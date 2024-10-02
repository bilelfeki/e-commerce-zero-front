import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  host:{
    "(mouseenter)": "_openCategory()",
    "(mouseleave)": "_closeCategory()",
  }
})
export class CategoryComponent {

  content={
    headerName:'Categ-1',
    headerItems:['item-1','item-2','item-2','item-3']
  }
  clicked=false

  _openCategory(){
    this.clicked=true
  }
  _closeCategory(){
    this.clicked=false
  }
}
