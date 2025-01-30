import { Component, OnInit } from '@angular/core';
import { CancionService } from '../../services/cancion.service';

@Component({
  selector: 'app-canciones',
  standalone: false,
  
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit{
  canciones: any[] = [];
  page: number = 0;
  size: number = 10;
  constructor(private cancionService: CancionService){}
  ngOnInit(): void {
      this.loadCanciones();
  }

  loadCanciones(): void {
    this.cancionService.getCanciones(this.page, this.size).subscribe({
      next: (data) => (this.canciones = data.content),
      error: (err) => console.error('Error al cargar canciones', err)
    });
  }
}
