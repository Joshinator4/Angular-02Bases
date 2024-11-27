import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [MainPageComponent, AddPersonajeComponent, ListaComponent],
  imports: [
    CommonModule
],
  exports: [MainPageComponent]
})
export class DbzModule { }
