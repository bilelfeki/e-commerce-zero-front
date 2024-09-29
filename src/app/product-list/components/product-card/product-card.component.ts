import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() price=599
  @Input()  starsNumber=5
  @Input() imageUrl=''
  @Input() description:string | undefined;
  protected starsNumberIterator=new Array(this.starsNumber)

}
