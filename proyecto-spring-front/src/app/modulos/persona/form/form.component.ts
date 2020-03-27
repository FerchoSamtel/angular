import { PersonaService } from './../persona.service';
import { Persona } from './../persona';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

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
  }

  create(): void {
    this.service.create(this.persona).subscribe(
      json => {
        this.router.navigate(['/persona']);
        swal.fire('Nueva persona', `persona ${this.persona.nombre} creada con éxito`, 'success');
    });
  }
}
