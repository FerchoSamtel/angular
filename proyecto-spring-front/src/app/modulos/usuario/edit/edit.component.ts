
import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  titulo: string;
  constructor(private service: UsuarioService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
    this.titulo = 'Usuario  actualizar';
  }

  ngOnInit(): void {
    this.cargarUsuario();
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
        swal.fire('Usuario actualizado', `Usuario ${this.usuario.usuario} actualizado con éxito`, 'success');
      }
    );
  }

}
