import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AperturaCaja } from '../../_class/apertura-caja';

@Component({
  selector: 'app-apertura-caja-modal',
  standalone: false,
  templateUrl: './apertura-caja-modal.component.html',
  styleUrls: ['./apertura-caja-modal.component.css', '../../app.css']
})
export class AperturaCajaModalComponent implements OnChanges{
  @Input() showModal = false;
  @Input() modalTitle = "";
  @Input() data: AperturaCaja | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<AperturaCaja>();

  form: FormGroup;
  edit=false;
  
  constructor(private builder: FormBuilder) {

    this.form = this.builder.group({

      id: [this.data?.id],
      idUsuario: [this.data?.idUsuario, Validators.required],
      fechaApertura: [this.data?.fechaApertura, Validators.required],
      montoInicial: [this.data?.montoInicial, [Validators.required, Validators.min(0)]],
      estatus: [this.data?.estatus],
      
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
