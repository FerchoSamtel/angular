import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {

  titulo: string;
  constructor() {
    this.titulo = 'BIENVENIDOS';
  }

  ngOnInit(): void {
  }

}
