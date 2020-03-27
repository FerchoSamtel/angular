import { PerfilService } from './perfil.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { FormComponent } from './form/form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [PerfilComponent, FormComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    PerfilRoutingModule,
    NgxPaginationModule
  ],
  providers: [PerfilService]
})
export class PerfilModule { }
