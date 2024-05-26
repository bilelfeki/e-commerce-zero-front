import { Component } from '@angular/core';
import Swiper from 'swiper';
import SwiperCore,  { Navigation, Pagination, Scrollbar, A11y ,SwiperOptions} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const swiper = new Swiper('.swiper', {
  // Install modules
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.css'
})
export class SwiperComponent {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper() {
  }
  onSlideChange() {
    console.log('slide change');
  }

}
