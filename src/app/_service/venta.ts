import { Injectable } from '@angular/core';
import { Venta } from '../_class/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  data: Venta[] = [{ 
        idVenta: 5001,
        fechaHora: new Date('2023-10-27T09:15:00'),
        total: 150.50,
        idFormaPago: 1, 
        idUsuario: 2,
        estatus: 'PAGADA',
        idProducto: 10, 
        cantidad: 2, 
        precioUnitario: 50.00, 
        subtotal: 100.00
    }
      ];
    
    
      constructor() { }
  
      getAll(): Venta[] {
        return this.data;
      }
    
      get(id: number): Venta | undefined {
        return this.data.find(d => d.idVenta === id);
      }
    
      add(Venta: Venta) {
        Venta.idVenta=this.data.reduce((max, item) => item.idVenta > max ? item.idVenta: max, 0) + 1;
        this.data.push(Venta);
      }
    
      edit(value: Venta) {
        const index = this.data.findIndex(d => d.idVenta === value.idVenta);
        if (index !== -1) {
          this.data[index] = value;
        }
      }
    
      delete(id: number) {
        this.data = this.data.filter(d => d.idVenta !== id);
      }
}
