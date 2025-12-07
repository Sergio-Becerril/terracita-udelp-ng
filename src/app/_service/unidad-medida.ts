import { Injectable } from '@angular/core';
import { UnidadMedida } from '../_class/unidad-medida';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {
  data: UnidadMedida[] = [{ idUnidad: 1, nombre: 'Pieza', abreviatura: 'PZA', activo: true },
    { idUnidad: 2, nombre: 'Kilogramo', abreviatura: 'KG', activo: true },
    { idUnidad: 3, nombre: 'Litro', abreviatura: 'L', activo: true },
    { idUnidad: 4, nombre: 'Caja', abreviatura: 'CJA', activo: true }
      ];
    
    
      constructor() { }
  
      getAll(): UnidadMedida[] {
        return this.data;
      }
    
      get(id: number): UnidadMedida | undefined {
        return this.data.find(d => d.idUnidad === id);
      }
    
      add(UnidadMedida: UnidadMedida) {
        UnidadMedida.idUnidad=this.data.reduce((max, item) => item.idUnidad > max ? item.idUnidad: max, 0) + 1;
        this.data.push(UnidadMedida);
      }
    
      edit(value: UnidadMedida) {
        const index = this.data.findIndex(d => d.idUnidad === value.idUnidad);
        if (index !== -1) {
          this.data[index] = value;
        }
      }
    
      delete(id: number) {
        this.data = this.data.filter(d => d.idUnidad !== id);
      }
}
