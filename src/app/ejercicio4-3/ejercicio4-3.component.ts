import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio4-3.component.html',
  styleUrl: './ejercicio4-3.component.css'
})
export class Ejercicio43Component {
  public centros: Centro[] = [centro1, centro2, centro3, centro4];
  public contador: number = 0;
  public pila: Centro[] = [];

  public anterior(){
    if(this.contador != 0){
      this.contador--;
    }
  }

  public posterior(){
    if(this.contador < this.centros.length){
      this.contador++;
    }

  }

  public eliminar(){
    this.pila.push(this.centros[this.contador]);
    this.centros.splice(this.contador, 1)
    this.anterior()
  }

  public insertar(){
    if(this.centros.length != 0){
      this.centros.splice(this.contador, 0, this.pila.pop() || centro1)
    }else {
      this.centros[0] = this.pila.pop() || centro1
    }

  }
}

class Centro{
  constructor (
    public nombreCentro: string,
    public localidad: string,
    public familiasProfesionales: string [],
    public centro: string,
    public logo: string
  ){}
}

const centro1 = new Centro('Playamar', 'Torremolinos', ['Informática y Comunicaciones', 'Transporte y Mantenimiento'], 'IES Playamar', 'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png');
const centro2 = new Centro('Jacaranda', 'Churriana', ['Hostelería y Turismo', 'Mecanica de aviones'], 'IES Jacaranda', 'https://hosteleriajacaranda.es/wp-content/uploads/2021/09/logo_iesjacaranda.png');
const centro3 = new Centro('Cerro del viento', 'Arroyo de la miel', ['Informática y Comunicaciones', 'Hostelería y Turismo'], 'IES Cerro del Viento', 'https://iescerrodelviento.es/img/logo.jpg');
const centro4 = new Centro('Arroyo de la Miel', 'Arroyo de la miel', ['Transporte y Mantenimiento', 'Mecanica de aviones'], 'IES Arroyo de la Miel', 'https://blogsaverroes.juntadeandalucia.es/iesarroyodelamiel/files/2020/11/logo_IESArroyoM_512_512-Cuadrado.jpg');
