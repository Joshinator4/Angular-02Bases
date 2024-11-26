import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  standalone: false,
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

    public nombre: string = 'Goku';
    public edad: number = 32
    private nombrePrivado = 'kakarot'

    public get nombreCapitalizado():string{
      return this.nombre.toUpperCase()
    }

    public getDescricionHeroe():string{
      return `${this.nombre} - ${this.edad}`
    }

    private getNombrePrivado():string{
      return this.nombrePrivado
    }

    public cambiarEdad(){
      this.edad = 45
    }

    public cambiarNombre(){
      this.nombre = 'kakarot'
    }

    public reset(){
      this.nombre = 'Goku'
      this.edad = 32
    }
}
