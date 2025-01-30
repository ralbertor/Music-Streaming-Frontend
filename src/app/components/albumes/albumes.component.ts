import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albumes',
  standalone: false,
  
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit{
  albumes: any[] = [];
  page: number = 0; //Página principal
  size: number = 10; //Tamaño de la página
  constructor(private albumService: AlbumService){}
  ngOnInit(): void {
      this.loadAlbumes();
  }

  loadAlbumes(): void {
    this.albumService.getAlbumes(this.page, this.size).subscribe({
      next: (data) => (this.albumes = data.content),
      error: (err) => console.error('Error al cargar albumes', err)
    });
  }
}
