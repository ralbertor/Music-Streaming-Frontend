import { Component, OnInit } from '@angular/core';
import { CancionService } from '../../services/cancion.service';

@Component({
  selector: 'app-canciones',
  standalone: false,
  
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})
export class CancionesComponent implements OnInit{
  canciones: any[] = [];
  constructor(private cancionService: CancionService){}
  ngOnInit(): void {
      this.cancionService.getCanciones().subscribe(canciones =>
        this.canciones=canciones     
      );
  }
}
