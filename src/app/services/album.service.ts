import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'http://localhost:8080/albumes'
  constructor(private http: HttpClient) { }

  getAlbumes(): Observable<any>{
    return this.http.get(`${this.apiUrl}/todos`);
  }

  getAlbum(id:number): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createAlbum(album: any): Observable<any>{
    return this.http.post(this.apiUrl, album);
  }

  updateAlbum(id:number, album:any): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, album);
  }

  deleteAlbum(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
