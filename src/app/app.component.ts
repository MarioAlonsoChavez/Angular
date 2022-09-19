import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo1Angular';

  pelicula={
    titulo:'SuperMan',
    fechaLanza:new Date(),
    precio: '$200'

  };

  duplicarValor(x:number):number{
    return x*2;
  }
}
