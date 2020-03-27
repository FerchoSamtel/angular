
import { PersonaService } from './../../persona/persona.service';
import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilService } from './../../perfil/perfil.service';
import { Persona } from './../../persona/persona';
import { Perfil } from './../../perfil/perfil';
import swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public usuario: Usuario = new Usuario();
   // OBJETO PARA LISTAR TODOS LOS CODIGOS DEL PERFIL EN LA TABLA USUARIO
   perfiles: Perfil[];
  // OBJETO PARA LISTAR TODOS DOCUMENTOS DEL PERFIL EN LA TABLA USUARIO
   personas: Persona[];
  titulo: string;
  constructor(private service: UsuarioService,
              private personaService: PersonaService,
              private perfilService: PerfilService,
              private router: Router) {
    this.titulo = 'Agregar usuario';
   }

  ngOnInit(): void {
    this.personaService.getPerfil().subscribe(
      persona =>
       this.personas = persona
    );
    this.perfilService.getPerfil().subscribe(
      perfil => {
      this.perfiles = perfil;
      }
    );

  }

  create(): void {
    this.service.create(this.usuario).subscribe(
      json => {
        this.router.navigate(['/usuario']);
        swal.fire('Nuevo usuario', `Usuario ${this.usuario.usuario} creado con éxito`, 'success');
    });
  }

}
