import { Persona } from './persona';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatDate, registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';

@Injectable()
export class PersonaService {

  private urlEndPoint = 'http://localhost:8080/person/persona';
  private urlupdate = 'http://localhost:8080/person/upload';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private httpHeaderss = new HttpHeaders({ 'Content-Type': 'text/csv' });

  constructor(private http: HttpClient,
              private router: Router) { }

  getPerfil(): Observable<Persona[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => {
        const personas = response as Persona[];
        return personas.map(persona => {
          registerLocaleData(localeES, 'es');
          persona.fechaNacimiento = formatDate(persona.fechaNacimiento, 'EEEE dd, MMMM yyyy', 'es');
          return persona;
        });
      })
    );
  }

  getPerfiles(numeroDocumento: number): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${numeroDocumento}`);
  }

  create(persona: Persona): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, persona, { headers: this.httpHeaders });
  }

  update(persona: Persona): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${persona.numeroDocumento}`, persona, { headers: this.httpHeaders });
  }

  delete(numeroDocumento: number): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/${numeroDocumento}`);
  }

  uploadFile(archivo): Observable<any> {
    return this.http.post<any>(this.urlupdate, archivo, { headers: this.httpHeaderss });
  }
}
