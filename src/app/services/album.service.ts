import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'http://localhost:8080/api/albumes'
  constructor(private http: HttpClient) { }

  getAlbumes(page: number, size: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/todos?page=${page}&size=${size}`);
  }

  getAlbum(id:number): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createAlbum(album: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/add`, album);
  }

  createAlbumWithCanciones(album: any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl}/CrearConCanciones`, album);
  }

  updateAlbum(id:number, album:any): Observable<any>{
    return this.http.put(`${this.apiUrl}/update/${id}`, album);
  }

  deleteAlbum(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
  
}
