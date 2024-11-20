import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListaComponent } from "./lista/lista.component";

@NgModule({
  imports: [CommonModule],
  exports: [HeroeComponent, ListaComponent],
  providers: [],
  declarations: [HeroeComponent, ListaComponent],

})
export class HeroeModule {};
