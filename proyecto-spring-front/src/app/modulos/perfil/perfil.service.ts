import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Perfil } from './perfil';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PerfilService {

  private urlEndPoint = 'http://localhost:8080/profile/perfil';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient,
              private router: Router) { }

  getPerfil(): Observable<Perfil[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => {
        const perfil = response as Perfil[];
        return perfil;
      })
    );
  }

  getPerfiles(codigoPerfil: number): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${codigoPerfil}`);
  }

  create(perfil: Perfil): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, perfil, { headers: this.httpHeaders });
  }

  update(perfil: Perfil): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${perfil.codigoPerfil}`, perfil, { headers: this.httpHeaders });
  }

  delete(codigoPerfil: number): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/${codigoPerfil}`);
  }
}
