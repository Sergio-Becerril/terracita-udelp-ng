import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OtroMovimiento } from '../../_class/otro-movimiento';

@Component({
  selector: 'app-otro-movimiento-modal',
  standalone: false,
  templateUrl: './otro-movimiento-modal.component.html',
  styleUrls: ['./otro-movimiento-modal.component.css', '../../app.css']
})
export class OtroMovimientoModalComponent implements OnChanges{
  @Input() showModal = false;
  @Input() modalTitle = "";
  @Input() data: OtroMovimiento | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<OtroMovimiento>();

  form: FormGroup;
  edit=false;
  
  constructor(private builder: FormBuilder) {

    this.form = this.builder.group({
      idTipoMovimiento: [this.data?.idTipoMovimiento],
      nombre: [this.data?.nombre, Validators.required],
      esEntrada: [this.data?.esEntrada],
      descripcion: [this.data?.descripcion, Validators.required],
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