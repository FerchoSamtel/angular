import { PerfilService } from './../perfil.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Perfil } from './../perfil';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  public perfil: Perfil = new Perfil();
  titulo: string;
  constructor(private service: PerfilService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
    this.titulo = 'perfilAgregar';
  }

  ngOnInit(): void {
    this.cargarPerfil();
  }
  cargarPerfil(): void {
    this.activateRouter.params.subscribe(param => {
      const codigoPerfil = param.codigoPerfil;
      if (codigoPerfil) {
        this.service.getPerfiles(codigoPerfil).subscribe((perfil) => this.perfil = perfil);
      }
    });
  }

  update(): void {
    this.service.update(this.perfil).subscribe(
      json => {
        this.router.navigate(['/perfil']);
        swal.fire('Perfil actualizado', `Perfil ${this.perfil.codigoPerfil} actualizado con éxito`, 'success');
      }
    );
  }
}
