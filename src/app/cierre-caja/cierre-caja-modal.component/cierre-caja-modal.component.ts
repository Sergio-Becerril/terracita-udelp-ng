import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CierreCaja } from '../../_class/cierre-caja';

@Component({
  selector: 'app-cierre-caja-modal',
  standalone: false,
  templateUrl: './cierre-caja-modal.component.html',
  styleUrls: ['./cierre-caja-modal.component.css', '../../app.css']
})
export class CierreCajaModalComponent implements OnChanges{
  @Input() showModal = false;
  @Input() modalTitle = "";
  @Input() data: CierreCaja | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<CierreCaja>();

  form: FormGroup;
  edit=false;
  
  constructor(private builder: FormBuilder) {

    this.form = this.builder.group({

      idCierre: [this.data?.idCierre],
      idUsuario: [this.data?.idUsuario, Validators.required],
      fechaCierre: [this.data?.fechaCierre, Validators.required],
      montoCierre: [this.data?.montoCierre, [Validators.required, Validators.min(0)]],
      
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
