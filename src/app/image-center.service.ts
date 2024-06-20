import { Injectable } from '@angular/core';


export interface ImagesURL{
  swiperUrl:string[],
  productUrl:string[]
}
@Injectable({
  providedIn: 'root'
})
export class ImageCenterService {

  constructor() { }
  imagesUrl:ImagesURL={
    swiperUrl:[],
    productUrl:[]
  }
}
