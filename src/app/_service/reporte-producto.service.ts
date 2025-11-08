import { Injectable } from '@angular/core';
import { ReporteProducto } from '../_class/reporte-producto';

@Injectable({
  providedIn: 'root'
})
export class ReporteProductoService {
  
  data: ReporteProducto[] = [{id:1, nombre: "Agua", precio: 1, existencia:5, categoria:"General", estado:"Activo"},
                                {id:2 , nombre: "Cafe", precio: 2, existencia:10, categoria:"General", estado:"Activo"},
                                {id:3, nombre: "Te", precio: 3, existencia:20, categoria:"General", estado:"Activo"},
      ];
    
    
      constructor() { }
  
      getAll(): ReporteProducto[] {
        return this.data;
      }
    
      get(id: number): ReporteProducto | undefined {
        return this.data.find(d => d.id === id);
      }
    
      add(ReporteProducto: ReporteProducto) {
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
