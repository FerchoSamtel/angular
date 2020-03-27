import { Perfil } from './../perfil/perfil';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatDate, registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint = 'http://localhost:8080/user/usuario';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient,
              private router: Router) { }

  getUsuario(): Observable<Usuario[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => {
        const usuario = response as Usuario[];
        // tslint:disable-next-line: no-shadowed-variable
        return usuario.map(usuario => {
          registerLocaleData(localeES, 'es');
          usuario.fechaCreacion = formatDate(usuario.fechaCreacion, 'EEEE dd, MMMM yyyy', 'es');
          if (usuario.fechaModificacion) {
            usuario.fechaModificacion = formatDate(usuario.fechaModificacion, 'EEEE dd, MMMM yyyy', 'es');
            return usuario;
          }
          return usuario;
        });
      })
    );
  }

  getUsuarios(usuario: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${usuario}`);
  }

  create(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, usuario, { headers: this.httpHeaders });
  }

  update(usuario: Usuario): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${usuario.usuario}`, usuario, { headers: this.httpHeaders });
  }

  delete(usuario: string): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/${usuario}`);
  }
}
