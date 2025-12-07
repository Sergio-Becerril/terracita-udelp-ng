import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ReporteProducto } from '../../_class/reporte-producto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../_class/categoria';
import { CategoriaService } from '../../_service/categoria.service';

@Component({
  selector: 'app-reporte-producto-modal',
  standalone: false,
  templateUrl: './reporte-producto-modal.component.html',
  styleUrls: ['./reporte-producto-modal.component.css', '../../app.css']
})
export class ReporteProductoModalComponent implements OnChanges {
  @Input() showModal = false;
  @Input() modalTitle = "";
  @Input() data: ReporteProducto | null = null;
  @Input() categorias: Categoria[] = [];
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<ReporteProducto>();

  form: FormGroup;
  edit=false;
  
  constructor(private builder: FormBuilder) {

    this.form = this.builder.group({
      id: [this.data?.id],
      nombre: [this.data?.nombre, Validators.required],
      precio: [this.data?.precio, Validators.required],
      existencia: [this.data?.existencia, Validators.required],
      categoria: [this.data?.categoria?.id],
      estado: [this.data?.estado],
    });
   }

  ngOnChanges(Changes: SimpleChanges): void {
    if (Changes['data'] && this.data) {
      this.edit = true;
      this.form.patchValue(this.data);
    } else {
      this.edit = false;
      this.form.reset();
    }
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
  saveModal() {
    if (this.form.valid) {
        let tempCategoria = this.categorias.find(c => c.id == this.form.value.categoria)||null;
        this.form.value.categoria = tempCategoria;
      this.saveEvent.emit(this.form.value);
    }
  }

}
