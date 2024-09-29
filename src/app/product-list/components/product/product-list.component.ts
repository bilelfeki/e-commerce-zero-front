import { Component, OnInit } from '@angular/core';
import { ProductImagesService } from '../../services/product-images.service';

export interface ProductDetails{
  title:string;
  description?:string;
  price:number;
  rate:number
  imageSource:string
}
@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  constructor(private productImagesService:ProductImagesService){}
  ngOnInit(): void {
    this.productImagesService.getProductImagesUrls().subscribe(data=>{
      data.forEach((url,index)=>{
        this.productDetails[index].imageSource=url
      })
    })
  }
  rateIterator=Array.from(Array(5).keys());
  productDetails:ProductDetails[]=[{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/101029-home/pc-portable-schneider-scl141ctp-quad-core-2-go-.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  }]
}
