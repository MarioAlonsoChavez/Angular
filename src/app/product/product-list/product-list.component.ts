import { Component, OnInit } from '@angular/core';
import { IProducto} from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imagewidth:number=250;
  imageMarge:number=2;
  mostrarImg:boolean=false;
  listFilter:string='';

  constructor() { }

  mostrarImagen():void{
    this.mostrarImg=!this.mostrarImg;
  }

  products:IProducto[]=[
    {
      "product1":1,
      "productName":'Sentra',
      "description":'auto familiar 4 puertas',
      'listFilter':"",
      "createDate":"Mayo 21, 2011",
      "price": 130000,
      "rating":3.6,
      "imageUrl": "https://www.nissanvictoria.com.mx/static/agency-go-virtual/Nissan/Sentra/2023/versiones/nissan-2022-sentra_sr_platinum_bi_tono-d.jpg"
      
    },
    {
      "product1":2,
      "productName":'Chevrolet',
      "description":'auto familiar 4 puertas',
      'listFilter':"",
      "createDate":"Febrero 01, 2017",
      "price": 230000,
      "rating":4,
      "imageUrl": "https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/cars/2023-onix/colorizer/01-images/jellys/v2/azul-ultramar.jpg?imwidth=960"
      
    }
  ]
  ngOnInit(): void {
  }

}
