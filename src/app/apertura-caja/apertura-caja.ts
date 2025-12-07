import { Component, OnInit } from '@angular/core';
import { AppReport } from '../util/app-report';
import { Router } from '@angular/router';
import { AperturaCajaService } from '../_service/apertura-caja';
import { AperturaCaja } from '../_class/apertura-caja';

@Component({
  selector: 'app-apertura-caja',
  standalone: false,
  templateUrl: './apertura-caja.html',
  styleUrls: ['./apertura-caja.css', '../app.css']
})
export class AperturasCaja extends AppReport implements OnInit {

  aperturasCaja: AperturaCaja[] = [];
  showModal = false;
  modalTitle = "";
  aperturaCaja: AperturaCaja | null = null;
  uri = "procesos/apertura-caja";

  constructor(private service: AperturaCajaService, router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.aperturasCaja = this.service.getAll();
  }

  openAddModal() {
    this.modalTitle = "apertura-caja.add-apertura";
    this.aperturaCaja = null;
    this.showModal = true;
  }
  openEditModal(aperturaCaja: AperturaCaja) {
    this.modalTitle = "apertura-caja.edit-apertura";
    this.aperturaCaja = aperturaCaja;
    this.showModal = true;
  }

  closeModalEvent() {
    this.showModal = false;
    this.aperturaCaja = null;
    this.modalTitle = "";
  }

  saveEvent(aperturaCaja: AperturaCaja) {
    if (aperturaCaja.id) {
      // Edit existing categoria
      this.service.edit(aperturaCaja);
    } else {
      // Add new categoria
      this.service.add(aperturaCaja);
    }
    this.closeModalEvent();
    this.showModalMessage = true;
    this.modalTitleMessage = "messages.success";
    this.messageBody = "messages.save-success";
  }


}