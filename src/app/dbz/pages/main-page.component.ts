import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent implements OnInit {

  public personajes: Personaje[] = [
    {
      nombre: 'Goku',
      fuerza: 50000
    },
    {
      nombre: 'Krilin',
      fuerza: 150
    },
    {
      nombre: 'Trunks',
      fuerza: 3500
    },
    {
      nombre: 'Vegeta',
      fuerza: 49000
    },
    {
      nombre: 'Gohan',
      fuerza: 40000
    }
  ]
  //!Este metodo servirá para recibir el evento de add-personaje.component.ts recibe un personaje y lo añade a la lista
  public newPersonaje(personaje: Personaje): void{
    // console.log('MainPage')
    // console.log(personaje);

    this.personajes.push(personaje)
  }
  //!Este metodo servirá para recibir el evento de lista.component.ts recibe un indice de la lista y lo elimina con el metodo splice()
  public borrarPersonaje(indice:number): void{
    //!El índice le marca la posición, y el 1 le marca que se eliminará 1 elemento, mostrando el elemento eliminado en la consola
    console.log(this.personajes.splice(indice, 1));
  }

  constructor() { }

  ngOnInit() { }
}
