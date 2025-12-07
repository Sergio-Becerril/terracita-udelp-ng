import { Injectable } from '@angular/core';
import { OtroMovimiento } from '../_class/otro-movimiento';

@Injectable({
  providedIn: 'root'
})
export class OtroMovimientoService {
  data: OtroMovimiento[] = [{ 
        
        idTipoMovimiento: 1, 
        nombre: 'AJUSTE_POSITIVO', 
        esEntrada: true, 
        descripcion: 'Corrección de inventario por sobrante', 
        activo: true 
    },
    { 
        idTipoMovimiento: 2, 
        nombre: 'MERMA', 
        esEntrada: false, 
        descripcion: 'Producto dañado o caducado', 
        activo: true 
    },
    { 
        idTipoMovimiento: 3, 
        nombre: 'USO_INTERNO', 
        esEntrada: false, 
        descripcion: 'Consumo para la tienda', 
        activo: true 
    
    }
      ];
    
    
      constructor() { }
  
      getAll(): OtroMovimiento[] {
        return this.data;
      }
    
      get(id: number): OtroMovimiento | undefined {
        return this.data.find(d => d.idTipoMovimiento === id);
      }
    
      add(OtroMovimiento: OtroMovimiento) {
        OtroMovimiento.idTipoMovimiento=this.data.reduce((max, item) => item.idTipoMovimiento > max ? item.idTipoMovimiento: max, 0) + 1;
        this.data.push(OtroMovimiento);
      }
    
      edit(value: OtroMovimiento) {
        const index = this.data.findIndex(d => d.idTipoMovimiento === value.idTipoMovimiento);
        if (index !== -1) {
          this.data[index] = value;
        }
      }
    
      delete(id: number) {
        this.data = this.data.filter(d => d.idTipoMovimiento !== id);
      }
}