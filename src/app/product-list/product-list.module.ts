import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { MainComponent } from './components/main/main.component';

import { SwiperComponent } from './components/swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { ProductListRoutingModule } from './product-list.routing.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { fromEvent, of, switchMap } from 'rxjs';

@NgModule({
  declarations: [
    SwiperComponent,
    ProductComponent,
    ProductDetailsComponent,
    MainComponent,
  ],
  imports: [CommonModule, ProductListRoutingModule, SwiperModule],
})
export class ProductListModule {

}
