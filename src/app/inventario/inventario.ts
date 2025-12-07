import { Component, OnInit } from '@angular/core';
import { AppReport } from '../util/app-report';
import { Router } from '@angular/router';
import { Inventario } from '../_class/inventario';
import { InventarioService } from '../_service/inventario';

@Component({
  selector: 'app-inventario',
  standalone: false,
  templateUrl: './inventario.html',
  styleUrls: ['./inventario.css', '../app.css']
})
export class Inventarios extends AppReport implements OnInit {

  inventarios: Inventario[] = [];
  showModal = false;
  modalTitle = "";
  inventario: Inventario | null = null;
  uri = "procesos/inventarios";

  constructor(private service: InventarioService, router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.inventarios = this.service.getAll();
  }

  openAddModal() {
    this.modalTitle = "inventario.add-inventario";
    this.inventario = null;
    this.showModal = true;
  }
  openEditModal(Inventario: Inventario) {
    this.modalTitle = "inventario.edit-inventario";
    this.inventario = Inventario;
    this.showModal = true;
  }

  closeModalEvent() {
    this.showModal = false;
    this.inventario = null;
    this.modalTitle = "";
  }

  saveEvent(Inventario: Inventario) {
    if (Inventario.id) {
      // Edit existing categoria
      this.service.edit(Inventario);
    } else {
      // Add new categoria
      this.service.add(Inventario);
    }
    this.closeModalEvent();
    this.showModalMessage = true;
    this.modalTitleMessage = "messages.success";
    this.messageBody = "messages.save-success";
  }


}