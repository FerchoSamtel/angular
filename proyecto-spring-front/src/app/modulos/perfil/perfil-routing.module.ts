import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { FormComponent } from './form.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
   {path: '', component: PerfilComponent},
  {path: '', redirectTo: '/perfil', pathMatch: 'full'},
  { path: '', redirectTo: 'perfil', pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent },
  { path: 'perfil/form', component: FormComponent },
  { path: 'perfil/form/:codigoPerfil', component: FormComponent },

];

@NgModule({
  imports: [HttpClientModule, BrowserModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
