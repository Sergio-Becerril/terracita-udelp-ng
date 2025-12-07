import { Injectable } from '@angular/core';
import { Proveedor } from '../_class/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  data: Proveedor[] = [{ 
        idProveedor: 1, 
        nombre: 'Distribuidora de Bebidas S.A.', 
        telefono: '555-0199', 
        email: 'contacto@bebidas.com', 
        direccion: 'Av. Industrial 123', 
        activo: true 
    },
    { 
        idProveedor: 2, 
        nombre: 'Comercializadora de Abarrotes', 
        telefono: '555-3040', 
        email: 'ventas@abarrotes.com', 
        direccion: 'Calle Reforma 45', 
        activo: true 
    }
      ];
    
    
      constructor() { }
  
      getAll(): Proveedor[] {
        return this.data;
      }
    
      get(id: number): Proveedor | undefined {
        return this.data.find(d => d.idProveedor === id);
      }
    
      add(Proveedor: Proveedor) {
        Proveedor.idProveedor=this.data.reduce((max, item) => item.idProveedor > max ? item.idProveedor: max, 0) + 1;
        this.data.push(Proveedor);
      }
    
      edit(value: Proveedor) {
        const index = this.data.findIndex(d => d.idProveedor === value.idProveedor);
        if (index !== -1) {
          this.data[index] = value;
        }
      }
    
      delete(id: number) {
        this.data = this.data.filter(d => d.idProveedor !== id);
      }
}
