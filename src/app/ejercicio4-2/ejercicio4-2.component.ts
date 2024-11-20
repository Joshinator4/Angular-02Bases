import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio4-2.component.html',
  styleUrl: './ejercicio4-2.component.css'
})
export class Ejercicio42Component {
  public nombreCentro: string = 'IES Playamar';
  public localidad: string = 'Torremolinos';
  public familiasProfesionales: string [] = ['Informática y Comunicaciones', 'Transporte y Mantenimiento']
  public centro: string = 'IES Playamar'
  public logo: string = 'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png'

  public intercambiar():void{
    if(this.centro === 'IES Playamar'){
      this.nombreCentro = 'IES Jacaranda';
      this.localidad = 'Churriana';
      this.familiasProfesionales = ['Hostelería y Turismo', 'Mecanica de aviones'];
      this.centro = 'IES Jacaranda';
      this.logo = 'https://hosteleriajacaranda.es/wp-content/uploads/2021/09/logo_iesjacaranda.png'
    }else{
      this.nombreCentro = 'IES Playamar';
      this.localidad = 'Torremolinos';
      this.familiasProfesionales= ['Informática y Comunicaciones', 'Transporte y Mantenimiento']
      this.centro= 'IES Playamar'
      this.logo = 'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png'
    }
  }
}
