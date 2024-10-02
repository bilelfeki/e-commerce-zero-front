import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent,  } from './components/footer/footer.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryComponent } from './components/category/category.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CategoryListComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    CategoryListComponent
  ]
})
export class SharedModule { }
