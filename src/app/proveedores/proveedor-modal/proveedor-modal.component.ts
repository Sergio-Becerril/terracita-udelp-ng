import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proveedor } from '../../_class/proveedor';

@Component({
  selector: 'app-proveedor-modal',
  standalone: false,
  templateUrl: './proveedor-modal.component.html',
  styleUrls: ['./proveedor-modal.component.css','../../app.css']
})
export class ProveedorModalComponent implements OnChanges {
  @Input() showModal = false;
  @Input() modalTitle = "";
  @Input() data: Proveedor | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<Proveedor>();

  form: FormGroup;
  edit=false;
  
  constructor(private builder: FormBuilder) {

    this.form = this.builder.group({
      idProveedor: [this.data?.idProveedor],
      nombre: [this.data?.nombre, Validators.required],
      telefono: [this.data?.telefono, Validators.required],
      email: [this.data?.email, Validators.required],
      direccion: [this.data?.direccion, Validators.required],
      activo: [this.data?.activo],
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
