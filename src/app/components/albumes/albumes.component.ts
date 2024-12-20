import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albumes',
  standalone: false,
  
  templateUrl: './albumes.component.html',
  styleUrl: './albumes.component.css'
})
export class AlbumesComponent implements OnInit{
  albumes: any[] = [];
  constructor(private albumService: AlbumService){}
  ngOnInit(): void {
      this.albumService.getAlbumes().subscribe(albumes =>
        this.albumes=albumes
      );
  }
}
