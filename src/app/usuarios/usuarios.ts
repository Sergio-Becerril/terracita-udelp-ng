import { Component, OnInit } from '@angular/core';
import { AppReport } from '../util/app-report';
import { Router } from '@angular/router';
import { Usuario } from '../_class/usuario';
import { UsuarioService } from '../_service/usuario';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css', '../app.css']
})
export class Usuarios extends AppReport implements OnInit {

  usuarios: Usuario[] = [];
  showModal = false;
  modalTitle = "";
  usuario: Usuario | null = null;
  uri = "administracion/usuarios";

  constructor(private service: UsuarioService, router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.usuarios = this.service.getAll();
  }

  openAddModal() {
    this.modalTitle = "usuarios.add-usuario";
    this.usuario = null;
    this.showModal = true;
  }
  openEditModal(usuario: Usuario) {
    this.modalTitle = "usuarios.edit-usuario";
    this.usuario = usuario;
    this.showModal = true;
  }

  closeModalEvent() {
    this.showModal = false;
    this.usuario = null;
    this.modalTitle = "";
  }

  saveEvent(usuario: Usuario) {
    if (usuario.idUsuario) {
      // Edit existing categoria
      this.service.edit(usuario);
    } else {
      // Add new categoria
      this.service.add(usuario);
    }
    this.closeModalEvent();
    this.showModalMessage = true;
    this.modalTitleMessage = "messages.success";
    this.messageBody = "messages.save-success";
  }


}