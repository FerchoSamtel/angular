import { PerfilService } from './../perfil.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Perfil } from './../perfil';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public perfil: Perfil = new Perfil();
  titulo: string;
  constructor(private service: PerfilService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
    this.titulo = 'perfilAgregar';
   }

  ngOnInit(): void {
  }
  create(): void {
    this.service.create(this.perfil).subscribe(
      json => {
        this.router.navigate(['/perfil']);
        swal.fire('Nuevo perfil', `Perfil ${this.perfil.codigoPerfil} creado con éxito`, 'success');
    });
  }
}
