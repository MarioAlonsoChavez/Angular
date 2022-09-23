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
      "imageUrl": "https://th.bing.com/th/id/R.a6885a8a55f52cb595a5ba0b38cab8e8?rik=IADN5%2f39KboC3g&riu=http%3a%2f%2f2.bp.blogspot.com%2f-xN4YhzerMGA%2fUiIisd-9gHI%2fAAAAAAAAONM%2fB7ci2-WTkdE%2fs1600%2fHello%2bKitty%2bCar_4.jpg&ehk=dFeK7C19mga9R3w65goVjkccciGbMxeZXayRuS1463I%3d&risl=&pid=ImgRaw&r=0"
      
    },
    {
      "product1":2,
      "productName":'Sentra',
      "description":'auto familiar 4 puertas',
      'listFilter':"",
      "createDate":"Mayo 21, 2011",
      "price": 130000,
      "rating":3.6,
      "imageUrl": "https://th.bing.com/th/id/R.1b21143faffe6a17f31ad0356166a367?rik=WFA1FV4QEgGKAg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-LnKXnd4TI3g%2fUiIis0KfPpI%2fAAAAAAAAONc%2fbxAfMQ7Lhrg%2fs1600%2fHello%2bKitty%2bCar_4235.jpg&ehk=vjTGp5cob20NG7scTFEu1fytGLAFztP1kzb%2fhjgp2Mk%3d&risl=&pid=ImgRaw&r=0"
      
    }
  ]
  ngOnInit(): void {
  }

}
