import { Injectable } from '@angular/core';
import { Compra } from '../_class/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  data: Compra[] = [{ 
        idCompra: 8001,
        idProveedor: 1,
        fechaHora: new Date('2023-10-20T08:00:00'),
        total: 5000.00,
        idUsuario: 1,
        estatus: 'RECIBIDA',
        idProducto: 5, 
        cantidad: 100, 
        costoUnitario: 10.00, 
        subtotal: 1000.00
    }
      ];
    
    
      constructor() { }
  
      getAll(): Compra[] {
        return this.data;
      }
    
      get(id: number): Compra | undefined {
        return this.data.find(d => d.idCompra === id);
      }
    
      add(Compra: Compra) {
        Compra.idCompra=this.data.reduce((max, item) => item.idCompra > max ? item.idCompra: max, 0) + 1;
        this.data.push(Compra);
      }
    
      edit(value: Compra) {
        const index = this.data.findIndex(d => d.idCompra === value.idCompra);
        if (index !== -1) {
          this.data[index] = value;
        }
      }
    
      delete(id: number) {
        this.data = this.data.filter(d => d.idCompra !== id);
      }
}
