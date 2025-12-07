import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../_class/usuario';

@Component({
  selector: 'app-usuario-modal',
  standalone: false,
  templateUrl: './usuario-modal.component.html',
  styleUrls: ['./usuario-modal.component.css', '../../app.css']
})
export class UsuarioModalComponent implements OnChanges{
  @Input() showModal = false;
  @Input() modalTitle = "";
  @Input() data: Usuario | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<Usuario>();

  form: FormGroup;
  edit=false;
  
  constructor(private builder: FormBuilder) {

    this.form = this.builder.group({
      idUsuario: [this.data?.idUsuario],
      nombreUsuario: [this.data?.nombreUsuario, Validators.required],
      passwordHash: [this.data?.passwordHash, Validators.required],
      rol: [this.data?.rol, Validators.required],
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