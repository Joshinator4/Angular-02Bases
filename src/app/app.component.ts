import { Component } from '@angular/core';


import { ContadorModule } from './contador/contador.module';
import { HeroeModule } from './heroes/heroe.module';
import { Ejercicio42Component } from "./ejercicio4-2/ejercicio4-2.component";
import { Ejercicio43Component } from './ejercicio4-3/ejercicio4-3.component';
import { DbzModule } from './dbz/dbz.module';
import { MainPageComponent } from './dbz/pages/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Ejercicio42Component, ContadorModule, HeroeModule,Ejercicio43Component,DbzModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02-bases';
}
