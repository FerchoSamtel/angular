import { Component, OnInit } from '@angular/core';
import { Perfil } from './perfil';
import { PerfilService } from './perfil.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

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
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar al perfil ${perfil.codigoPerfil}?`,
      icon: 'warning',
      buttonsStyling: false,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.delete(perfil.codigoPerfil).subscribe(
          response => {
            this.perfiles = this.perfiles.filter(emp => emp !== perfil);
            swalWithBootstrapButtons.fire(
              'Perfil Eliminado!',
              `Perfil ${perfil.codigoPerfil} eliminado con éxito.`,
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
          'El perfil no se ha podido eliminar',
          'error'
        );
      }
    });
  }
}
