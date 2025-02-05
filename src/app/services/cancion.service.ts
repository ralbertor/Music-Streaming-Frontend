import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  private apiUrl = 'http://localhost:8080/api/canciones'
  constructor(private http: HttpClient) { }

  getCanciones(page: number, size: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/todos?page=${page}&size=${size}`);
  }

  getCancion(id:number): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createCancion(cancion: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/add`, cancion);
  }

  updateCancion(id:number, cancion:any): Observable<any>{
    return this.http.put(`${this.apiUrl}/update/${id}`, cancion);
  }

  deleteCancion(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
  
}
