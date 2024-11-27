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
    }
  ]

  constructor() { }

  ngOnInit() { }
}
