import { Injectable } from '@angular/core';
import { Inventario } from '../_class/inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  data: Inventario[] = [{id:1, nombre: 'Consumibles', descripcion: "5000 unidades disponibles"},
                              {id:2 , nombre: 'Ropa', descripcion: "2000 unidades disponibles"},
                              {id:3, nombre: 'Electronicos', descripcion: "1500 unidades disponibles"},
    ];
  
  
    constructor() { }

    getAll(): Inventario[] {
      return this.data;
    }
  
    get(id: number): Inventario | undefined {
      return this.data.find(d => d.id === id);
    }
  
    add(Inventario: Inventario) {
      Inventario.id=this.data.reduce((max, item) => item.id > max ? item.id: max, 0) + 1;
      this.data.push(Inventario);
    }
  
    edit(value: Inventario) {
      const index = this.data.findIndex(d => d.id === value.id);
      if (index !== -1) {
        this.data[index] = value;
      }
    }
  
    delete(id: number) {
      this.data = this.data.filter(d => d.id !== id);
    }
  }
