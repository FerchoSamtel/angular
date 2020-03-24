import { Persona } from './persona';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PersonaService {

  private urlEndPoint = 'http://localhost:8080/person/persona';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient,
              private router: Router) { }

  getPerfil(): Observable<Persona[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => {
        const persona = response as Persona[];
        return persona;
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
}
