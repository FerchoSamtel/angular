import { PerfilService } from './../perfil/perfil.service';
import { Persona } from './../persona/persona';
import { Perfil } from './../perfil/perfil';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  // OBJETO PARA LISTAR TODOS LOS CODIGOS DEL PERFIL EN LA TABLA USUARIO
  perfiles: Perfil[];
  titulo: string;
  constructor(private service: UsuarioService,
              private perfilService: PerfilService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
    this.titulo = 'Usuario  actualizar';
  }

  ngOnInit(): void {
    this.cargarUsuario();
    this.perfilService.getPerfil().subscribe(
      perfil => {
      this.perfiles = perfil;
      this.cargarUsuario();
      }
    );
  }

  cargarUsuario(): void {
    this.activateRouter.params.subscribe(param => {
      const usuario = param.usuario;
      if (usuario) {
        this.service.getUsuarios(usuario).subscribe((usuarios) => this.usuario = usuarios);
      }
    });
  }

  update(): void {
    this.service.update(this.usuario).subscribe(
      json => {
        this.router.navigate(['/usuario']);
      }
    );
  }

}
