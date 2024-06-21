import { TestBed } from '@angular/core/testing';

import { SwiperImagesService } from './swiper-images.service';

describe('SwiperImagesService', () => {
  let service: SwiperImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiperImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
