import { Component, OnInit } from '@angular/core';
import { AppReport } from '../util/app-report';
import { Router } from '@angular/router';
import { Proveedor } from '../_class/proveedor';
import { ProveedorService } from '../_service/proveedor';

@Component({
  selector: 'app-proveedores',
  standalone: false,
  templateUrl: './proveedores.html',
  styleUrls: ['./proveedores.css', '../app.css']
})
export class Proveedores extends AppReport implements OnInit {

  proveedores: Proveedor[] = [];
  showModal = false;
  modalTitle = "";
  proveedor: Proveedor | null = null;
  uri = "catalogos-generales/proveedores";

  constructor(private service: ProveedorService, router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.proveedores = this.service.getAll();
  }

  openAddModal() {
    this.modalTitle = "proveedores.add-proveedor";
    this.proveedor = null;
    this.showModal = true;
  }
  openEditModal(Proveedor: Proveedor) {
    this.modalTitle = "proveedores.edit-proveedor";
    this.proveedor = Proveedor;
    this.showModal = true;
  }

  closeModalEvent() {
    this.showModal = false;
    this.proveedor = null;
    this.modalTitle = "";
  }

  saveEvent(Proveedor: Proveedor) {
    if (Proveedor.idProveedor) {
      // Edit existing categoria
      this.service.edit(Proveedor);
    } else {
      // Add new categoria
      this.service.add(Proveedor);
    }
    this.closeModalEvent();
    this.showModalMessage = true;
    this.modalTitleMessage = "messages.success";
    this.messageBody = "messages.save-success";
  }


}