import { Component, OnInit } from '@angular/core';
import { ArtistaService } from '../../services/artista.service';


@Component({
  selector: 'app-artistas',
  standalone: false,
  
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit{
  artistas: any[] = [];
  page: number = 0; //página principal
  size: number = 10; //Tamaño de la página
  constructor(private artistaService: ArtistaService){}
  ngOnInit(): void {
      this.loadArtistas();
  }

  loadArtistas(): void {
    this.artistaService.getArtistas(this.page, this.size).subscribe({
      next: (data) => (this.artistas = data.content),
      error: (err) => console.error('Error al cargar artistas', err)
    });
  }
}
