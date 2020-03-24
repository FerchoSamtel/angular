import { Component, OnInit } from '@angular/core';
import { Perfil } from './perfil';
import { PerfilService } from './perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  perfiles: Perfil[];
  titulo: string;
  p = 1;
  constructor(private service: PerfilService,
              private router: Router) {
    this.titulo = 'Perfil';
  }

  ngOnInit(): void {
    this.service.getPerfil().subscribe(
      perfil => this.perfiles = perfil
    );
  }

  delete(perfil: Perfil): void {
    this.service.delete(perfil.codigoPerfil).subscribe(
      response => {
        this.router.navigate(['/perfil']);
        this.perfiles = this.perfiles.filter(emp => emp !== perfil);
      }
    );
  }
}
