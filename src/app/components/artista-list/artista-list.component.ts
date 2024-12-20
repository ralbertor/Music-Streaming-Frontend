import { Component, OnInit } from '@angular/core';
import { ArtistaService } from '../../services/artista.service';
import { Artista } from '../../models/artista.model';

@Component({
  selector: 'app-artista-list',
  standalone:false,
  templateUrl: './artista-list.component.html',
  styleUrl: './artista-list.component.css'
})
export class ArtistaListComponent implements OnInit{
  
  artistas: Artista[] = [];
  constructor(private artistaService: ArtistaService){}
  ngOnInit(): void {
   this.loadArtistas(); 
  }

  loadArtistas(): void{
    this.artistaService.getArtistas().subscribe({
      next: (data) => (this.artistas = data),
      error: (err) => console.error('Error al cargar artistas', err),

  });
  }
}
