import { Component } from '@angular/core';


interface Persona {
  nombre: string;
  favoritos: Favorito[],
}

interface Favorito {
  id: number,
  name: string,
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Jose Carlos',
    favoritos: [
      {
        id: 1,
        name: 'Blinx',
      },
      {
        id: 2,
        name: 'Halo',
      },
    ]
  }

  agregarNuevoJuego() {
    const nuevoJuego: Favorito = {
      id: this.persona.favoritos.length + 1,
      name: this.nuevoJuego,
    }

    this.persona.favoritos.push({ ...nuevoJuego });
    this.nuevoJuego = '';
  }

  guardar() {
    console.log(`[persona] -> `, this.persona);
  }

  elliminarFavorito(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

}
