import { Perfil } from './../perfil/perfil';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Perfil }

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
        return usuario;
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
