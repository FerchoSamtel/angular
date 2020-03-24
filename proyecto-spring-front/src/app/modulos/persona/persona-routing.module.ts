import { PersonaComponent } from './persona.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: PersonaComponent },
  { path: '', redirectTo: '/persona', pathMatch: 'full' },
  { path: '', redirectTo: 'persona', pathMatch: 'full' },
  { path: 'persona', component: PersonaComponent },
  { path: 'persona/form', component: FormComponent },
  { path: 'persona/form/:numeroDocumento', component: FormComponent },
];


@NgModule({
  imports: [HttpClientModule, BrowserModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
