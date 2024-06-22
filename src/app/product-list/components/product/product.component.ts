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
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor(private productImagesService:ProductImagesService){}
  ngOnInit(): void {
    this.productImagesService.getProductImagesUrls().subscribe(data=>{
      console.log(data);

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
    imageSource:"https://drive.google.com/file/d/16xUPYaoB4Ow_Ue9BdKBQMe93agHm0Nr0"
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
