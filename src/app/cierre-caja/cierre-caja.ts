import { Component, OnInit } from '@angular/core';
import { AppReport } from '../util/app-report';
import { Router } from '@angular/router';
import { CierreCaja } from '../_class/cierre-caja';
import { CierreCajaService } from '../_service/cierre-caja';

@Component({
  selector: 'app-cierre-caja',
  standalone: false,
  templateUrl: './cierre-caja.html',
  styleUrls: ['./cierre-caja.css', '../app.css']
})
export class CierresCaja extends AppReport implements OnInit {

  cierresCaja: CierreCaja[] = [];
  showModal = false;
  modalTitle = "";
  cierreCaja: CierreCaja | null = null;
  uri = "procesos/cierre-caja";

  constructor(private service: CierreCajaService, router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.cierresCaja = this.service.getAll();
  }

  openAddModal() {
    this.modalTitle = "cierre-caja.add-cierre";
    this.cierreCaja = null;
    this.showModal = true;
  }
  openEditModal(cierreCaja: CierreCaja) {
    this.modalTitle = "cierre-caja.edit-cierre";
    this.cierreCaja = cierreCaja;
    this.showModal = true;
  }

  closeModalEvent() {
    this.showModal = false;
    this.cierreCaja = null;
    this.modalTitle = "";
  }

  saveEvent(cierreCaja: CierreCaja) {
    if (cierreCaja.idCierre) {
      // Edit existing categoria
      this.service.edit(cierreCaja);
    } else {
      // Add new categoria
      this.service.add(cierreCaja);
    }
    this.closeModalEvent();
    this.showModalMessage = true;
    this.modalTitleMessage = "messages.success";
    this.messageBody = "messages.save-success";
  }


}
