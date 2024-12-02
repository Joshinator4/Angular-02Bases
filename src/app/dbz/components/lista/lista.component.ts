import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  //!El input sirve para recibir posibles eventos
  @Input()
  public listaPersonajes: Personaje[] = [
    {
      nombre: 'Trunks',
      fuerza: 3500
    }
  ]
  //

  //!Output sirve para emitir eventos
  @Output()
  public onBorrarPersonaje: EventEmitter<number> = new EventEmitter();
  //!Este metodo recibe el indice de la lista. Lo recibimos desde lista.component.html con el indice generado por el ngFor let i = index
  public pasarIndice(indice: number): void{
    //!Se llama al evento con el metodo emit() y se le mete por parametro el indice
    this.onBorrarPersonaje.emit(indice)
  }
}
