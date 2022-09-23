import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    imagewidth:number=50;
    imageMarge:number=2;
    muestraImg:boolean=false;
    listFilter:string=''
  
  constructor() { }
  muestraImagen():void{
    this.muestraImg=!this.muestraImg;
  }
  products:any[]=[
    {
      "product1":1,
      "productName":'Sentra',
      "description":'Auto familiar 4 puertas',
      //listFilter:string='',
      "createDate":'Mayo 22, 2020',
      "price": 150000,
      "rating": 4.0,
      "ImagenURL":'data:https://s03.s3c.es/imag/_v0/770x420/c/5/f/ronaldo-coche.jpg'
    },
    {
      "product1":1,
      "productName":'Chevy',
      "description":'Auto familiar 4 puertas',
      "createDate":'Febrero 01, 2020',
      "price": 5000000,
      "rating": 5.0,
      "ImagenURL":'data:https://upload.wikimedia.org/wikipedia/commons/2/2f/2019_Chevrolet_Camaro_base%2C_front_11.9.19.jpg'
    }
  ]
  ngOnInit(): void {
  }

}
