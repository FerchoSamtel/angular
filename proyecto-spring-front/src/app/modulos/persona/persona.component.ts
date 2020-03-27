import swal from 'sweetalert2';
import { PersonaService } from './persona.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html'
})
export class PersonaComponent implements OnInit {

  archivo = {
    nombre: null,
    nombreArchivo: null,
    base64textString: null
  };

  personas: Persona[];
  titulo: string;
  constructor(private service: PersonaService,
              private router: Router) {
    this.titulo = 'Persona';
  }

  ngOnInit(): void {
    this.service.getPerfil().subscribe(
      persona => this.personas = persona
    );
  }

  delete(persona: Persona): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar a la persona ${persona.nombre}?`,
      icon: 'warning',
      buttonsStyling: false,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.delete(persona.numeroDocumento).subscribe(
          response => {
            this.personas = this.personas.filter(per => per !== persona);
            swalWithBootstrapButtons.fire(
              'Persona Eliminada!',
              `Persona ${persona.nombre} eliminada con éxito.`,
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
          'La persona no se ha podido eliminar',
          'error'
        );
      }
    });
  }

  seleccionarArchivo(event) {
    const files = event.target.files;
    const file = files[0];
    this.archivo.nombreArchivo = file.name;

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(readerEvent) {
    const binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
  }

  upload() {
     console.log(this.archivo);
     this.service.uploadFile(this.archivo).subscribe(
       datos => {
         // tslint:disable-next-line: triple-equals
         if (datos.resultado == 'OK') {
           alert(datos.mensaje);
         }
       });
  }
}
