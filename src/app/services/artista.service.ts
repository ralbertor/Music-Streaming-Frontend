import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  private apiUrl = 'http://localhost:8080/api/artistas';
  constructor(private http: HttpClient) { }
  
  getArtistas(): Observable<any>{
    return this.http.get(`${this.apiUrl}/todos`)
  }

  getArtista(id:number): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createArtista(artista: any): Observable<any>{
    return this.http.post(this.apiUrl, artista);
  }

  updateArtista(id:number, artista:any): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, artista);
  }

  deleteArtista(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
