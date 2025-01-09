import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private apiUrl = 'http://localhost:8080/generos'
  constructor(private http: HttpClient) { }

  getGeneros(): Observable<any>{
    return this.http.get(`${this.apiUrl}/todos`);
  }

  getGenero(id:number): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createGenero(genero: any): Observable<any>{
    return this.http.post(this.apiUrl, genero);
  }

  updateGenero(id:number, genero:any): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, genero);
  }

  deleteGenero(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
  
}
