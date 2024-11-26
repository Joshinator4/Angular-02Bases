// import { Component } from "@angular/core";

// @Component({
//   selector: 'app-contador',
//   template: '<h1>Hola Mundo!!!!!!!!!</h1>',
//   standalone: true,

// })
// export class contadorComponent{

// }

import { Component} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-contador',
  styleUrl: 'contador.component.css',
  template: `<h1>Hola mundo soy el contador</h1>

<hr>
<h3>Contador: {{ contador }}</h3>

<button (click)="incrementarContador()" class="btn">Sumar {{ cantidad }}</button><br>
<button (click)="decrementarContador()" class="btn">Restar {{ cantidad }}</button><br>
<button (click)="resetearContador()" class="btn">Resetear contador</button>

<h3>La cantidad a sumar o restar es: {{ cantidad }}</h3>`
})

export class ContadorComponent {
  public title: string = '02-bases';
  public inicial: number = 0
  public contador: number = this.inicial;
  public cantidad: number = 3;

  incrementarContador(): void {
    this.contador += this.cantidad;
  }

  decrementarContador(): void {
    this.contador -= this.cantidad;
  }

  resetearContador(): void{
    this.contador = this.inicial;
  }
}
