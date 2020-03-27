import { UsuarioService } from './usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import * as $ from 'jquery';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  titulo: string;
  constructor(private service: UsuarioService,
              private router: Router) {
    this.titulo = 'Usuario';
  }

  ngOnInit(): void {
    this.service.getUsuario().subscribe(
      usuario => this.usuarios = usuario
    );
  }

  imprimir() {
    const doc = new jsPDF ();
    doc.fromHTML($('#form_usuario').get(0), 1, 1);
    doc.save('lista de usuarios ');
  }
  delete(usuario: Usuario): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar al uusario ${usuario.usuario}?`,
      icon: 'warning',
      buttonsStyling: false,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.delete(usuario.usuario).subscribe(
          response => {
            this.router.navigate(['/usuario']);
            this.usuarios = this.usuarios.filter(per => per !== usuario);
            swalWithBootstrapButtons.fire(
              'Usuario Eliminado!',
              `Usuario ${usuario.usuario} eliminado con éxito.`,
              'success'
            );
          }
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El usuario no se ha podido eliminar',
          'error'
        );
      }
    });
  }

}
