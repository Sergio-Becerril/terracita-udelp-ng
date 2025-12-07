import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Venta } from '../../_class/venta';

@Component({
  selector: 'app-venta-modal',
  standalone: false,
  templateUrl: './venta-modal.component.html',
  styleUrls: ['./venta-modal.component.css', '../../app.css']
})
export class VentaModalComponent implements OnChanges{
  @Input() showModal = false;
  @Input() modalTitle = "";
  @Input() data: Venta | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<Venta>();

  form: FormGroup;
  edit=false;
  
  constructor(private builder: FormBuilder) {

    this.form = this.builder.group({
      idVenta: [this.data?.idVenta],
      idFormaPago: [this.data?.idFormaPago, Validators.required],
      fechaHora: [this.data?.fechaHora, Validators.required],
      total: [this.data?.total, Validators.required],
      idUsuario: [this.data?.idUsuario, Validators.required],
      estatus: [this.data?.estatus, Validators.required],
      idProducto: [this.data?.idProducto, Validators.required],
      cantidad: [this.data?.cantidad, Validators.required],
      precioUnitario: [this.data?.precioUnitario, Validators.required],
      subtotal: [this.data?.subtotal, Validators.required],
      
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
