import { Component, OnInit } from '@angular/core';
import { AppReport } from '../util/app-report';
import { Router } from '@angular/router';
import { Venta } from '../_class/venta';
import { VentaService } from '../_service/venta';

@Component({
  selector: 'app-ventas',
  standalone: false,
  templateUrl: './ventas.html',
  styleUrls: ['./ventas.css', '../app.css']
})
export class Ventas extends AppReport implements OnInit {

  ventas: Venta[] = [];
  showModal = false;
  modalTitle = "";
  venta: Venta | null = null;
  uri = "procesos/ventas";

  constructor(private service: VentaService, router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.ventas = this.service.getAll();
  }

  openAddModal() {
    this.modalTitle = "ventas.add-venta";
    this.venta = null;
    this.showModal = true;
  }
  openEditModal(venta: Venta) {
    this.modalTitle = "ventas.edit-venta";
    this.venta = venta;
    this.showModal = true;
  }

  closeModalEvent() {
    this.showModal = false;
    this.venta = null;
    this.modalTitle = "";
  }

  saveEvent(venta: Venta) {
    if (venta.idVenta) {
      // Edit existing categoria
      this.service.edit(venta);
    } else {
      // Add new categoria
      this.service.add(venta);
    }
    this.closeModalEvent();
    this.showModalMessage = true;
    this.modalTitleMessage = "messages.success";
    this.messageBody = "messages.save-success";
  }


}