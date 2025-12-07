import { Component, OnInit } from '@angular/core';
import { AppReport } from '../util/app-report';
import { Router } from '@angular/router';
import { UnidadMedida } from '../_class/unidad-medida';
import { UnidadMedidaService } from '../_service/unidad-medida';

@Component({
  selector: 'app-unidades-medida',
  standalone: false,
  templateUrl: './unidades-medida.html',
  styleUrls: ['./unidades-medida.css', '../app.css']
})
export class UnidadesMedida extends AppReport implements OnInit {

  unidadesMedida: UnidadMedida[] = [];
  showModal = false;
  modalTitle = "";
  unidadMedida: UnidadMedida | null = null;
  uri = "catalogos-generales/unidades-medida";

  constructor(private service: UnidadMedidaService, router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.unidadesMedida = this.service.getAll();
  }

  openAddModal() {
    this.modalTitle = "unidades-medida.add-unidad";
    this.unidadMedida = null;
    this.showModal = true;
  }
  openEditModal(unidadMedida: UnidadMedida) {
    this.modalTitle = "unidades-medida.edit-unidad";
    this.unidadMedida = unidadMedida;
    this.showModal = true;
  }

  closeModalEvent() {
    this.showModal = false;
    this.unidadMedida = null;
    this.modalTitle = "";
  }

  saveEvent(unidadMedida: UnidadMedida) {
    if (unidadMedida.idUnidad) {
      // Edit existing categoria
      this.service.edit(unidadMedida);
    } else {
      // Add new categoria
      this.service.add(unidadMedida);
    }
    this.closeModalEvent();
    this.showModalMessage = true;
    this.modalTitleMessage = "messages.success";
    this.messageBody = "messages.save-success";
  }


}