import { TestBed } from '@angular/core/testing';

import { SwiperImagesService } from './swiper-images.service';
import { HttpClient } from '@angular/common/http';

describe('SwiperImagesService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: SwiperImagesService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SwiperImagesService] });
    service = new SwiperImagesService(httpClientSpy);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
