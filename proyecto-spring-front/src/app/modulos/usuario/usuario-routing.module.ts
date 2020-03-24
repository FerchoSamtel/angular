import { EditComponent } from './edit.component';
import { UsuarioComponent } from './usuario.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: '', component: UsuarioComponent},
 {path: '', redirectTo: '/usuario', pathMatch: 'full'},
 { path: '', redirectTo: 'usuario', pathMatch: 'full' },
 { path: 'usuario', component: UsuarioComponent },
 { path: 'usuario/form', component: FormComponent },
 { path: 'usuario/form/:usuario', component: EditComponent },
];

@NgModule({
  imports: [HttpClientModule, BrowserModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
