import { PersonaService } from './../persona.service';
import { Persona } from './../persona';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  public persona: Persona = new Persona();
  titulo: string;
  constructor(private service: PersonaService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
    this.titulo = 'Actualizar perfil';
   }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.activateRouter.params.subscribe( param => {
      const numeroDocumento = param.numeroDocumento;
      if (numeroDocumento) {
        this.service.getPerfiles(numeroDocumento).subscribe((persona) => this.persona = persona);
      }
    });
  }

    update(): void {
      this.service.update(this.persona).subscribe(
        json => {
          this.router.navigate(['/persona']);
          swal.fire('persona actualizada', `Persona ${this.persona.nombre} actualizada con éxito`, 'success');
        }
      );
    }
  }


