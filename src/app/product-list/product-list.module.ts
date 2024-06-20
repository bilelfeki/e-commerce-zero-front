import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { MainComponent } from './components/main/main.component';

import { SwiperComponent } from './components/swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { ProductListRoutingModule } from './product-list.routing.module';

@NgModule({
  declarations: [SwiperComponent, ProductComponent, MainComponent],
  imports: [CommonModule, ProductListRoutingModule, SwiperModule],
})
export class ProductListModule {}
