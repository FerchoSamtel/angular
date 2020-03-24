import { UsuarioService } from './usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import * as $ from 'jquery';

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
    this.service.delete(usuario.usuario).subscribe(
      response => {
        this.router.navigate(['/usuario']);
        this.usuarios = this.usuarios.filter(per => per !== usuario);
      }
    );
  }

}
