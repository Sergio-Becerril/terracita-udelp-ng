import { Injectable } from '@angular/core';
import { Categoria } from '../_class/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  categorias: Categoria[] = [{id:1, nombre: 'Bebidas', descripcion: "frias y calientes"},
                            {id:2 , nombre: 'Comida', descripcion: "rapida y saludable"},
                            {id:3, nombre: 'Postre', descripcion: "dulces y postres variados"},
  ];


  constructor() { }

  getCategorias(): Categoria[] {

    return this.categorias;
  }

  getCategoria(id: number): Categoria | undefined {
    return this.categorias.find(cat => cat.id === id);
  }

  addCategoria(categoria: Categoria) {
    this.categorias.push(categoria);
  }

  editCategoria(uCategoria: Categoria) {
    const index = this.categorias.findIndex(cat => cat.id === uCategoria.id);
    if (index !== -1) {
      this.categorias[index] = uCategoria;
    }
  }

  deleteCategoria(id: number) {
    this.categorias = this.categorias.filter(cat => cat.id !== id);
  }
}
