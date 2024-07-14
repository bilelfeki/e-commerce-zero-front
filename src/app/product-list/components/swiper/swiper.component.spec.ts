import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { SwiperModule } from 'swiper/angular';
import { SwiperImagesService } from '../../services/swiper-images.service';
import { SwiperComponent } from './swiper.component';
import { provideHttpClient } from '@angular/common/http';
describe('SwiperComponent', () => {
  let component: SwiperComponent;
  let fixture: ComponentFixture<SwiperComponent>;
  let getSwiperImageUrls: jasmine.Spy;
  let service: SwiperImagesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperModule],
      declarations: [SwiperComponent],
      providers: [SwiperImagesService,provideHttpClient()],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    service = TestBed.inject(SwiperImagesService);
    getSwiperImageUrls = spyOn(service, 'getSwiperImageUrls').and.returnValue(
      of(['hello spy'])
    );
    fixture = TestBed.createComponent(SwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#swiperImageSources should not be empty', async () => {
    expect(component.swiperImageSources.length).toBeGreaterThan(0);
  });
});
