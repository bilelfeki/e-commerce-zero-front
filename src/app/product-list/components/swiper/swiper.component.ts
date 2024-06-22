import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { map, of, switchMap } from 'rxjs';
import Swiper, { Autoplay } from 'swiper';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
} from 'swiper';
import { SwiperImagesService } from '../../services/swiper-images.service';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const swiper = new Swiper('.swiper', {
  // Install modules
  modules: [Navigation, Pagination, Scrollbar, Autoplay],
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.css',
})
export class SwiperComponent implements OnInit {
  config: SwiperOptions = {
    watchSlidesProgress: true,
    direction: 'horizontal',
    navigation: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };
  swiperImageSources:string[] = [];

  constructor(private swiperImagesService: SwiperImagesService) {}
  ngOnInit(): void {
    this.swiperImagesService.getSwiperImageUrls()
    .subscribe(data=>{
      this.swiperImageSources=data
    })
  }
  onSwiper() {}
  onSlideChange() {}
}
