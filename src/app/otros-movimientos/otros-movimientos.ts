import { Component, OnInit } from '@angular/core';
import { AppReport } from '../util/app-report';
import { Router } from '@angular/router';
import { OtroMovimiento } from '../_class/otro-movimiento';
import { OtroMovimientoService } from '../_service/otro-movimiento';

@Component({
  selector: 'app-otros-movimientos',
  standalone: false,
  templateUrl: './otros-movimientos.html',
  styleUrls: ['./otros-movimientos.css', '../app.css']
})
export class OtrosMovimientos extends AppReport implements OnInit {

  otrosMovimientos: OtroMovimiento[] = [];
  showModal = false;
  modalTitle = "";
  otroMovimiento: OtroMovimiento | null = null;
  uri = "procesos/otros-movimientos";

  constructor(private service: OtroMovimientoService, router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.otrosMovimientos = this.service.getAll();
  }

  openAddModal() {
    this.modalTitle = "otros-movimientos.add-tipo-movimiento";
    this.otroMovimiento = null;
    this.showModal = true;
  }
  openEditModal(otroMovimiento: OtroMovimiento) {
    this.modalTitle = "otros-movimientos.edit-tipo-movimiento";
    this.otroMovimiento = otroMovimiento;
    this.showModal = true;
  }

  closeModalEvent() {
    this.showModal = false;
    this.otroMovimiento = null;
    this.modalTitle = "";
  }

  saveEvent(otroMovimiento: OtroMovimiento) {
    if (otroMovimiento.idTipoMovimiento) {
      // Edit existing categoria
      this.service.edit(otroMovimiento);
    } else {
      // Add new categoria
      this.service.add(otroMovimiento);
    }
    this.closeModalEvent();
    this.showModalMessage = true;
    this.modalTitleMessage = "messages.success";
    this.messageBody = "messages.save-success";
  }


}