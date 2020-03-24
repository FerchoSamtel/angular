import { PersonaService } from './persona.service';
import { Persona } from './persona';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public persona: Persona = new Persona();
  titulo: string;
  constructor(private service: PersonaService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
    this.titulo = 'perfilAgregar';
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

  create(): void {
    this.service.create(this.persona).subscribe(
      json => {
        this.router.navigate(['/persona']);
    });
  }

  update(): void {
    this.service.update(this.persona).subscribe(
      json => {
        this.router.navigate(['/persona']);
      }
    );
  }
}
