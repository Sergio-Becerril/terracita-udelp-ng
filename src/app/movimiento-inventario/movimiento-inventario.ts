import { Component, OnInit } from '@angular/core';
import { AppReport } from '../util/app-report';
import { Router } from '@angular/router';
import { MovimientoInventario } from '../_class/movimiento-inventario';
import { MovimientoInventarioService } from '../_service/movimiento-inventario';

@Component({
  selector: 'app-movimiento-inventario',
  standalone: false,
  templateUrl: './movimiento-inventario.html',
  styleUrls: ['./movimiento-inventario.css', '../app.css']
})
export class MovimientosInventario extends AppReport implements OnInit {

  movimientosInventario: MovimientoInventario[] = [];
  showModal = false;
  modalTitle = "";
  movimientoInventario: MovimientoInventario | null = null;
  uri = "procesos/movimiento-inventario";

  constructor(private service: MovimientoInventarioService, router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.movimientosInventario = this.service.getAll();
  }

  openAddModal() {
    this.modalTitle = "movimiento-inventario.add-movimiento";
    this.movimientoInventario = null;
    this.showModal = true;
  }
  openEditModal(movimientoInventario: MovimientoInventario) {
    this.modalTitle = "movimiento-inventario.edit-movimiento";
    this.movimientoInventario = movimientoInventario;
    this.showModal = true;
  }

  closeModalEvent() {
    this.showModal = false;
    this.movimientoInventario = null;
    this.modalTitle = "";
  }

  saveEvent(movimientoInventario: MovimientoInventario) {
    if (movimientoInventario.idMovimiento) {
      // Edit existing categoria
      this.service.edit(movimientoInventario);
    } else {
      // Add new categoria
      this.service.add(movimientoInventario);
    }
    this.closeModalEvent();
    this.showModalMessage = true;
    this.modalTitleMessage = "messages.success";
    this.messageBody = "messages.save-success";
  }


}