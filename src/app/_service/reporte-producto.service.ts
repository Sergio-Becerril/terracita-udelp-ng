import { Injectable } from '@angular/core';
import { ReporteProducto } from '../_class/reporte-producto';

@Injectable({
  providedIn: 'root'
})
export class ReporteProductoService {
  
  data: ReporteProducto[] = [{id:1, nombre: "Agua", precio: 1, existencia:5, 
                              categoria: {id:1,nombre:'Bebidas', descripcion:"", productos: null}, estado:true, cantidad:0},
                              {id:2 , nombre: "Cafe", precio: 2, existencia:10, 
                              categoria:{id:1,nombre:'Bebidas', descripcion:"", productos: null}, estado:true, cantidad:0},
                              {id:3, nombre: "Te", precio: 3, existencia:20, 
                              categoria:{id:1,nombre:'Bebidas', descripcion:"", productos: null}, estado:true, cantidad:0},
                              {id:4, nombre: "Hamburgesa", precio: 6, existencia:60, 
                              categoria:{id:2,nombre:'Comida', descripcion:"", productos: null}, estado:true, cantidad:0},
                              {id:5, nombre: "Flan", precio: 8, existencia:50, 
                              categoria:{id:3,nombre:'Postre', descripcion:"", productos: null}, estado:true, cantidad:0},
      ];
    
    
      constructor() { }
  
      getAll(): ReporteProducto[] {
        return this.data;
      }
    
      get(id: number): ReporteProducto | undefined {
        return this.data.find(d => d.id === id);
      }
    
      add(ReporteProducto: ReporteProducto) {
        ReporteProducto.id=this.data.reduce((max, item) => item.id > max ? item.id: max, 0) + 1;
        this.data.push(ReporteProducto);
      }
    
      edit(value: ReporteProducto) {
        const index = this.data.findIndex(d => d.id === value.id);
        if (index !== -1) {
          this.data[index] = value;
        }
      }
    
      delete(id: number) {
        this.data = this.data.filter(d => d.id !== id);
      }
  
}
