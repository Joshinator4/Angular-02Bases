import { NgModule } from "@angular/core";

import { ContadorComponent } from './components/contador/contador.component';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [ContadorComponent],
  providers: [],
  declarations: [ContadorComponent],

})
export class ContadorModule {};
