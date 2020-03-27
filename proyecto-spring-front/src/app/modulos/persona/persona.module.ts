import { PersonaService } from './persona.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonaRoutingModule } from './persona-routing.module';
import { PersonaComponent } from './persona.component';
import { FormComponent } from './form/form.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [PersonaComponent, FormComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    PersonaRoutingModule
  ],
  providers: [PersonaService]
})
export class PersonaModule { }
