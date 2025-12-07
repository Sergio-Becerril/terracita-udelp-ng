import { Injectable } from '@angular/core';
import { MetodoPago } from '../_class/metodo-pago';

@Injectable({
  providedIn: 'root'
})
export class MetodoPagoService {

  data: MetodoPago[] = [{id:1, nombre: 'Efectivo', descripcion: "Pagos en efectivo"},
                              {id:2 , nombre: 'TDD', descripcion: "Pagos con tarjeta de debito"},
                              {id:3, nombre: 'TDC', descripcion: "Pagos con tarjeta de credito"},
    ];
  
  
    constructor() { }

    getAll(): MetodoPago[] {
      return this.data;
    }
  
    get(id: number): MetodoPago | undefined {
      return this.data.find(d => d.id === id);
    }
  
    add(MetodoPago: MetodoPago) {
      MetodoPago.id=this.data.reduce((max, item) => item.id > max ? item.id: max, 0) + 1;
      this.data.push(MetodoPago);
    }
  
    edit(value: MetodoPago) {
      const index = this.data.findIndex(d => d.id === value.id);
      if (index !== -1) {
        this.data[index] = value;
      }
    }
  
    delete(id: number) {
      this.data = this.data.filter(d => d.id !== id);
    }
  }