import { Component, OnInit } from '@angular/core';
import { AppReport } from '../util/app-report';
import { Router } from '@angular/router';
import { ReporteProducto } from '../_class/reporte-producto';
import { ReporteProductoService } from '../_service/reporte-producto.service';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.html',
  styleUrls: ['./productos.css', '../app.css']
})
export class Productos extends AppReport implements OnInit {

  reportesProducto: ReporteProducto[] = [];
  showModal = false;
  modalTitle = "";
  reporteProducto: ReporteProducto | null = null;
  uri = "catalogos-generales/productos";

  constructor(private service: ReporteProductoService, router: Router) {
    super(router);
   }

  ngOnInit(): void {
    this.reportesProducto = this.service.getAll();
  }

  openAddModal() {
    this.modalTitle = "reportes-producto.add-producto";
    this.reporteProducto = null;
    this.showModal = true;
  }
  openEditModal(reporteProducto: ReporteProducto) {
    this.modalTitle = "reportes-producto.edit-producto";
    this.reporteProducto = reporteProducto;
    this.showModal = true;
  }

  closeModalEvent() {
    this.showModal = false;
    this.reporteProducto = null;
    this.modalTitle = "";
  }

  saveEvent(reporteProducto: ReporteProducto) {
    if (reporteProducto.id) {
      // Edit existing categoria
      this.service.edit(reporteProducto);
    } else {
      // Add new categoria
      this.service.add(reporteProducto);
    }
    this.closeModalEvent();
    this.showModalMessage = true;
    this.modalTitleMessage = "messages.success";
    this.messageBody = "messages.save-success";
  }


}

