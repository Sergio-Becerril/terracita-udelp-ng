import { Injectable } from '@angular/core';
import { Usuario } from '../_class/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  data: Usuario[] = [{ 
        idUsuario: 1, 
        nombreUsuario: 'admin', 
        passwordHash: 'hashed_secret_123', 
        rol: 'ADMINISTRADOR', 
        activo: true 
    },
    { 
        idUsuario: 2, 
        nombreUsuario: 'cajero1', 
        passwordHash: 'hashed_secret_456', 
        rol: 'CAJERO', 
        activo: true 
    }
      ];
    
    
      constructor() { }
  
      getAll(): Usuario[] {
        return this.data;
      }
    
      get(id: number): Usuario | undefined {
        return this.data.find(d => d.idUsuario === id);
      }
    
      add(Usuario: Usuario) {
        Usuario.idUsuario=this.data.reduce((max, item) => item.idUsuario > max ? item.idUsuario: max, 0) + 1;
        this.data.push(Usuario);
      }
    
      edit(value: Usuario) {
        const index = this.data.findIndex(d => d.idUsuario === value.idUsuario);
        if (index !== -1) {
          this.data[index] = value;
        }
      }
    
      delete(id: number) {
        this.data = this.data.filter(d => d.idUsuario !== id);
      }
    }