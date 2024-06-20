import { TestBed } from '@angular/core/testing';

import { ImageCenterService } from './image-center.service';

describe('ImageCenterService', () => {
  let service: ImageCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
