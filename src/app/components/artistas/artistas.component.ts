import { Component, OnInit } from '@angular/core';
import { ArtistaService } from '../../services/artista.service';


@Component({
  selector: 'app-artistas',
  standalone: false,
  
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.css'
})
export class ArtistasComponent implements OnInit{
  artistas: any[] = [];
  constructor(private artistaService: ArtistaService){}
  ngOnInit(): void {
      this.artistaService.getArtistas().subscribe(artistas =>{
        this.artistas=artistas
        console.log(this.artistas)
      },
      (error) =>{
        console.error('Error al obtener artistas:', error);
      }
      );
  }
}
