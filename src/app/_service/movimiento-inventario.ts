import { Injectable } from '@angular/core';
import { MovimientoInventario } from '../_class/movimiento-inventario';

@Injectable({
  providedIn: 'root'
})
export class MovimientoInventarioService {
  data: MovimientoInventario[] = [{ 
        idMovimiento: 100,
        idProducto: 5,
        idTipoMovimiento: 1, 
        cantidad: 10,
        existenciaAnterior: 50,
        existenciaNueva: 60,
        referencia: 'INV-2023-001',
        fechaHora: new Date('2023-10-25T10:00:00'),
        idUsuario: 1,
        motivo: 'Inventario mensual'
    }
      ];
    
    
      constructor() { }
  
      getAll(): MovimientoInventario[] {
        return this.data;
      }
    
      get(id: number): MovimientoInventario | undefined {
        return this.data.find(d => d.idMovimiento === id);
      }
    
      add(MovimientoInventario: MovimientoInventario) {
        MovimientoInventario.idMovimiento=this.data.reduce((max, item) => item.idMovimiento > max ? item.idMovimiento: max, 0) + 1;
        this.data.push(MovimientoInventario);
      }
    
      edit(value: MovimientoInventario) {
        const index = this.data.findIndex(d => d.idMovimiento === value.idMovimiento);
        if (index !== -1) {
          this.data[index] = value;
        }
      }
    
      delete(id: number) {
        this.data = this.data.filter(d => d.idMovimiento !== id);
      }
}