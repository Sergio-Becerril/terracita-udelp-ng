import { Injectable } from '@angular/core';
import { CierreCaja } from '../_class/cierre-caja';

@Injectable({
  providedIn: 'root'
})
export class CierreCajaService {
  data: CierreCaja[] = [{ 
        idCierre: 1,
        idUsuario: 2,
        fechaCierre: new Date('2023-10-20T08:00:00'), 
        montoCierre: 5450.00,
    }
      ];
    
    
      constructor() { }
  
      getAll(): CierreCaja[] {
        return this.data;
      }
    
      get(id: number): CierreCaja | undefined {
        return this.data.find(d => d.idCierre === id);
      }
    
      add(CierreCaja: CierreCaja) {
        CierreCaja.idCierre=this.data.reduce((max, item) => item.idCierre > max ? item.idCierre: max, 0) + 1;
        this.data.push(CierreCaja);
      }
    
      edit(value: CierreCaja) {
        const index = this.data.findIndex(d => d.idCierre === value.idCierre);
        if (index !== -1) {
          this.data[index] = value;
        }
      }
    
      delete(id: number) {
        this.data = this.data.filter(d => d.idCierre !== id);
      }
}