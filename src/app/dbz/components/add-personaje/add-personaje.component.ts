import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  standalone: false,
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {
  //!Output() marca que va a sacar algo
  @Output()
  //!este atributo es un emiter para emitir lo que le digamos
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();


  public personaje: Personaje = {
    id: "",
    nombre: "",
    fuerza: 0
  }
  //!Este metodo es el que se llama en el add-personaje.component.html
  public addPersonaje():void{

    // debugger;

    console.log(this.personaje);

    if(this.personaje.nombre.length === 0) return;

    //!Se llama al atributo con el metodo emit() y se emite el personaje introducido por el html
    this.onNewPersonaje.emit(this.personaje)
    //!Para no pasar la referencia se crea un nuevo personaje con = {} con los valores vacíos en este caso
    this.personaje = {
      id: "",
      nombre: "",
      fuerza: 0
    };
  }
}
