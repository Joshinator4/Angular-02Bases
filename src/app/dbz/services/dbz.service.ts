import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid} from 'uuid';

//a-service es el snippet para crear un servicio

//Injectable sirve para que angular lo reconozca como un servicio. Hace que podamos utilizar la instancia de este servicio en cialquier momento y en cualquier punto de la aplicación
@Injectable({providedIn: 'root'})
export class DbzService {


  constructor() { }


  public personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: 'Goku',
      fuerza: 50000
    },
    {
      id: uuid(),
      nombre: 'Krilin',
      fuerza: 150
    },
    {
      id: uuid(),
      nombre: 'Trunks',
      fuerza: 3500
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      fuerza: 49000
    },
    {
      id: uuid(),
      nombre: 'Gohan',
      fuerza: 40000
    }
  ]
  //!Este metodo servirá para recibir el evento de add-personaje.component.ts recibe un personaje y lo añade a la lista
  public newPersonaje(personaje: Personaje): void{
    // console.log('MainPage')
    // console.log(personaje);
    //!Se hace aqui el id: uuid() y no en el add-personaje.component.ts porque normalmente aquí se va a hacer la conexión a la BBDD y normalmente el id lo generará la BBDD
    const newPersonaje: Personaje ={id: uuid(), ...personaje}; //...personaje es lo mismo que hacer personaje.id, personaje.nombre, personaje.fuerza
    this.personajes.push(newPersonaje);
  }
  //!Este metodo servirá para recibir el evento de lista.component.ts recibe un indice de la lista y lo elimina con el metodo splice()
  public borrarPersonaje(indice:number): void{
    //!El índice le marca la posición, y el 1 le marca que se eliminará 1 elemento, mostrando el elemento eliminado en la consola
    console.log(this.personajes.splice(indice, 1));
  }
}
