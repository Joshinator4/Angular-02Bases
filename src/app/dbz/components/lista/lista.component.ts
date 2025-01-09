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
  public listaPersonajes: Personaje[] = []


  //!La propiedad de tipo "EventEmitter", necesaria para emitir el evento personalizado, debe ser decorada con @Output. Esto le dice al framework que va a existir una vía de
  //!comunicación desde el hijo al padre.
  @Output()
  public onBorrarPersonaje: EventEmitter<string> = new EventEmitter();
  //!Este metodo recibe el id del personaje. Lo recibimos desde lista.component.html con el indice generado por el ngFor personaje in personajes y se pasará la propiedad id de la interfaz personaje
  public pasarId(id: string): void{
    this.onBorrarPersonaje.emit(id);
  }
  // public onBorrarPersonaje: EventEmitter<number> = new EventEmitter();
  //!Este metodo recibe el indice de la lista. Lo recibimos desde lista.component.html con el indice generado por el ngFor let i = index
  // public pasarIndice(indice: number): void{
    //!Se llama al evento con el metodo emit() y se le mete por parametro el indice
    // this.onBorrarPersonaje.emit(indice)
  // }
}
