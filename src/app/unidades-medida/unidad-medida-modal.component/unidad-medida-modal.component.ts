import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidadMedida } from '../../_class/unidad-medida';

@Component({
  selector: 'app-unidad-medida-modal',
  standalone: false,
  templateUrl: './unidad-medida-modal.component.html',
  styleUrls: ['./unidad-medida-modal.component.css', '../../app.css']
})
export class UnidadMedidaModalComponent implements OnChanges{
  @Input() showModal = false;
  @Input() modalTitle = "";
  @Input() data: UnidadMedida | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<UnidadMedida>();

  form: FormGroup;
  edit=false;
  
  constructor(private builder: FormBuilder) {

    this.form = this.builder.group({
      idUnidad: [this.data?.idUnidad],
      nombre: [this.data?.nombre, Validators.required],
      abreviatura: [this.data?.abreviatura, Validators.required],
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