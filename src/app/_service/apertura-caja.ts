import { Injectable } from '@angular/core';
import { AperturaCaja } from '../_class/apertura-caja';

@Injectable({
  providedIn: 'root'
})
export class AperturaCajaService {
  
  data: AperturaCaja[] = [{ 
        id: 1,
        idUsuario: 2,
        fechaApertura: new Date('2023-10-20T08:00:00'),
        montoInicial: 1000.00,
        estatus: false
        },
      ];
    
    
      constructor() { }
  
      getAll(): AperturaCaja[] {
        return this.data;
      }
    
      get(id: number): AperturaCaja | undefined {
        return this.data.find(d => d.id === id);
      }
    
      add(AperturaCaja: AperturaCaja) {
        AperturaCaja.id=this.data.reduce((max, item) => item.id > max ? item.id: max, 0) + 1;
        this.data.push(AperturaCaja);
      }

      edit(value: AperturaCaja) {
        const index = this.data.findIndex(d => d.id === value.id);
        if (index !== -1) {
          this.data[index] = value;
        }
      }
    
      delete(id: number) {
        this.data = this.data.filter(d => d.id !== id);
      }
}