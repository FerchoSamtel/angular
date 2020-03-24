import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilService } from './perfil.service';
import { Perfil } from './perfil';

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
    this.cargarPerfil();
  }

  cargarPerfil(): void {
    this.activateRouter.params.subscribe( param => {
      const codigoPerfil = param.codigoPerfil;
      if (codigoPerfil) {
        this.service.getPerfiles(codigoPerfil).subscribe((perfil) => this.perfil = perfil);
      }
    });
  }

  create(): void {
    this.service.create(this.perfil).subscribe(
      json => {
        this.router.navigate(['/perfil']);
    });
  }

  update(): void {
    this.service.update(this.perfil).subscribe(
      json => {
        this.router.navigate(['/perfil']);
      }
    );
  }

}
