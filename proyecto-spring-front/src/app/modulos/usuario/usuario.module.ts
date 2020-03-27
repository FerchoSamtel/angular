import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { FormComponent } from './form/form.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [UsuarioComponent, FormComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
