import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inventario } from '../../_class/inventario';

@Component({
  selector: 'app-inventario-modal',
  standalone: false,
  templateUrl: './inventario-modal.component.html',
  styleUrls: ['./inventario-modal.component.css', '../../app.css']
})
export class InventarioModalComponent implements OnChanges{
  @Input() showModal = false;
  @Input() modalTitle = "";
  @Input() data: Inventario | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<Inventario>();

  form: FormGroup;
  edit=false;
  
  constructor(private builder: FormBuilder) {

    this.form = this.builder.group({
      id: [this.data?.id],
      nombre: [this.data?.nombre, Validators.required],
      descripcion: [this.data?.descripcion, Validators.required],
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
