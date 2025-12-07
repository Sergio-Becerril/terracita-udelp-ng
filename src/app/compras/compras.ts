import { Component, OnInit } from '@angular/core';
import { AppReport } from '../util/app-report';
import { Router } from '@angular/router';
import { Compra } from '../_class/compra';
import { CompraService } from '../_service/compra';

@Component({
  selector: 'app-compras',
  standalone: false,
  templateUrl: './compras.html',
  styleUrls: ['./compras.css', '../app.css']
})
export class Compras extends AppReport implements OnInit {

  compras: Compra[] = [];
  showModal = false;
  modalTitle = "";
  compra: Compra | null = null;
  uri = "procesos/compras";

  constructor(private service: CompraService, router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.compras = this.service.getAll();
  }

  openAddModal() {
    this.modalTitle = "compras.add-compra";
    this.compra = null;
    this.showModal = true;
  }
  openEditModal(compra: Compra) {
    this.modalTitle = "compras.edit-compra";
    this.compra = compra;
    this.showModal = true;
  }

  closeModalEvent() {
    this.showModal = false;
    this.compra = null;
    this.modalTitle = "";
  }

  saveEvent(compra: Compra) {
    if (compra.idCompra) {
      // Edit existing categoria
      this.service.edit(compra);
    } else {
      // Add new categoria
      this.service.add(compra);
    }
    this.closeModalEvent();
    this.showModalMessage = true;
    this.modalTitleMessage = "messages.success";
    this.messageBody = "messages.save-success";
  }


}