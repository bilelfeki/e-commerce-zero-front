import { Component } from '@angular/core';

export interface footer{
  companyName:string,
  linkList:string[],
  onClickLogoLink:string,
  logImageLink:string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footer= {
    companyName:'shopnext',
    linkList:['About','Privacy Policy','Licensing','Contact'],
    onClickLogoLink:'https://flowbite.com/',
    logImageLink:'../../assets/logo-custom.png'
  }
}
