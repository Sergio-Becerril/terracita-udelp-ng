import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovimientoInventario } from '../../_class/movimiento-inventario';

@Component({
  selector: 'app-movimiento-inventario-modal',
  standalone: false,
  templateUrl: './movimiento-inventario-modal.component.html',
  styleUrls: ['./movimiento-inventario-modal.component.css', '../../app.css']
})
export class MovimientoInventarioModalComponent implements OnChanges{
  @Input() showModal = false;
  @Input() modalTitle = "";
  @Input() data: MovimientoInventario | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<MovimientoInventario>();

  form: FormGroup;
  edit=false;
  
  constructor(private builder: FormBuilder) {

    this.form = this.builder.group({
      idMovimiento: [this.data?.idMovimiento],
      idProducto: [this.data?.idProducto, Validators.required],
      idTipoMovimiento: [this.data?.idTipoMovimiento, Validators.required],
      cantidad: [this.data?.cantidad, [Validators.required, Validators.min(1)]],
      existenciaAnterior: [this.data?.existenciaAnterior],
      existenciaNueva: [this.data?.existenciaNueva],
      referencia: [this.data?.referencia, Validators.required],
      fechaHora: [this.data?.fechaHora, Validators.required],
      idUsuario: [this.data?.idUsuario, Validators.required],
      motivo: [this.data?.motivo, Validators.required],
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
      this.saveEvent.emit(this.form.value);
    }
  }

}
