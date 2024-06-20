import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swiper, { Autoplay } from 'swiper';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
} from 'swiper';

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
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('parser?url=https://github.com/bilelfeki/multi-website-pictures/tree/master/multi-website-picture/Electronic/Accueil')
    .subscribe((data) => console.log(data));
  }
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
  swiperImageSources = [
    'https://github.com/bilelfeki/multi-website-pictures/blob/master/multi-website-picture/eye%20glasses/Couverture/b-2.jpg?raw=true',
    'https://github.com/bilelfeki/portfolio/blob/master/src/assets/pexels-photo-1714205.jpeg?raw=true',
    'https://lh3.googleusercontent.com/u/1/drive-viewer/AKGpihY6Mot-d1a501BxZTtX8KCw0-Moa7A24GfzJyBVP67l_JQXVi5IlQ86RCg-H4TyneCTW4Vs3gi3ySdCp3F0nihjQz0NvsgeYiw=w1318-h612',
  ];
  onSwiper() {}
  onSlideChange() {}
}
