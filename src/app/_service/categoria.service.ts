import { Injectable } from '@angular/core';
import { Categoria } from '../_class/categoria';
import { ReporteProductoService } from './reporte-producto.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  categorias: Categoria[] = [{id:1, nombre: 'Bebidas', descripcion: "frias y calientes", productos: null},
                            {id:2 , nombre: 'Comida', descripcion: "rapida y saludable", productos: null},
                            {id:3, nombre: 'Postre', descripcion: "dulces y postres variados", productos: null},
  ];


  constructor(private productoService: ReporteProductoService) { }

  getCategorias(): Categoria[] {

    return this.categorias;
  }

  getCategoria(id: number): Categoria | undefined {
    return this.categorias.find(cat => cat.id === id);
  }

  addCategoria(categoria: Categoria) {
    categoria.id=this.categorias.reduce((max, item) => item.id > max ? item.id: max, 0) + 1;
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

  getCategoriasProductos(): Categoria[] {

    let productos = this.productoService.getAll();
    let arr: Categoria[] = [];
    this.categorias.forEach(cat => {
      cat.productos = productos.filter(prod => prod.categoria?.id === cat.id);
      arr.push(cat);
    })
    return arr;
  }
}
