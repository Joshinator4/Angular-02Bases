import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public nombresHeroes: string[] = ["Goku", "Vegeta", "Piccolo", "Gohan"];
  public heroeEliminado?: string;

  public eliminarUltimoHeroe(): void{
    this.heroeEliminado = this.nombresHeroes.pop()
  }
}
