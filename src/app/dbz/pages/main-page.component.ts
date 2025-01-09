import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  //!Un servicio siempre será privado nunca publico
  constructor(private dbzService: DbzService) { }

  get personajes(): Personaje[]{
    return this.dbzService.personajes
  }

  borrarPersonajeById(id: string):void{
    this.dbzService.borrarPersonajeById(id);
  }

  newPersonaje (personaje: Personaje):void{
    this.dbzService.newPersonaje(personaje)
  }
}
