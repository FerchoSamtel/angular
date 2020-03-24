import { PersonaService } from './persona.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html'
})
export class PersonaComponent implements OnInit {

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
    this.service.delete(persona.numeroDocumento).subscribe(
      response => {
        this.router.navigate(['/persona']);
        this.personas = this.personas.filter(per => per !== persona);
      }
    );
  }
}
