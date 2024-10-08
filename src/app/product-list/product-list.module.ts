import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ProductListComponent } from './components/product/product-list.component';
import { MainComponent } from './components/main/main.component';

import { SwiperComponent } from './components/swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { ProductListRoutingModule } from './product-list.routing.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { fromEvent, of, switchMap } from 'rxjs';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    SwiperComponent,
    ProductListComponent,
    ProductDetailsComponent,
    MainComponent,
    ProductCardComponent
  ],
  imports: [CommonModule, ProductListRoutingModule, SwiperModule],
})
export class ProductListModule {

}
