import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPageComponent, AddPersonajeComponent, ListaComponent],
  imports: [
    CommonModule,
    FormsModule
],
  exports: [MainPageComponent]
})
export class DbzModule { }
