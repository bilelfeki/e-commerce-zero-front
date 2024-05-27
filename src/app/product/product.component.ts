import { Component } from '@angular/core';

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
export class ProductComponent {
  rateIterator=Array.from(Array(5).keys());
  productDetails:ProductDetails[]=[{
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
  },{
    title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    description:"",
    price:599,
    rate:3,
    imageSource:"https://www.tunisianet.com.tn/241596-large/tablette-graphique-xp-pen-deco-fun-xs.jpg"
  }]
}
