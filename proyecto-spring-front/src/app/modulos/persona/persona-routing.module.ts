import { EditComponent } from './edit/edit.component';
import { PersonaComponent } from './persona.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'persona', component: PersonaComponent },
  { path: 'persona/form', component: FormComponent },
  { path: 'persona/form/:numeroDocumento', component: EditComponent },
];


@NgModule({
  imports: [HttpClientModule, BrowserModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
