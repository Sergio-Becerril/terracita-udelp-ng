import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compra } from '../../_class/compra';

@Component({
  selector: 'app-compra-modal',
  standalone: false,
  templateUrl: './compra-modal.component.html',
  styleUrls: ['./compra-modal.component.css', '../../app.css']
})
export class CompraModalComponent implements OnChanges{
  @Input() showModal = false;
  @Input() modalTitle = "";
  @Input() data: Compra | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<Compra>();

  form: FormGroup;
  edit=false;
  
  constructor(private builder: FormBuilder) {

    this.form = this.builder.group({
      idCompra: [this.data?.idCompra],
      idProveedor: [this.data?.idProveedor, Validators.required],
      fechaHora: [this.data?.fechaHora, Validators.required],
      total: [this.data?.total, Validators.required],
      idUsuario: [this.data?.idUsuario, Validators.required],
      estatus: [this.data?.estatus, Validators.required],
      idProducto: [this.data?.idProducto, Validators.required],
      cantidad: [this.data?.cantidad, Validators.required],
      costoUnitario: [this.data?.costoUnitario, Validators.required],
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
