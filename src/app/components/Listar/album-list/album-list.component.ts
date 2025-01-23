import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../../services/album.service';
import { Album } from '../../../models/album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-list',
  standalone: false,
  
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit{

  albumes: any[] = [];
  constructor(private albumService: AlbumService, private router: Router){}
  ngOnInit():void{
    this.loadAlbumes();
  }

  loadAlbumes(): void {
    this.albumService.getAlbumes().subscribe(
      data => {
        this.albumes = data;
      },
      error => {
        console.error('Error al obtener los álbumes:', error);
      }
    );
  }
  irAFormulario(): void{
    this.router.navigate(['/albumesForm']) 
  }
  irAHome(): void {
    this.router.navigate(['']);
  }
  Delete(album:Album){
    console.log('ID del album a eliminar', album.id);
    const confirmar = confirm(
      `¿Estas seguro de que deseas eliminar el album ${album.titulo}?`
    );
    if (confirmar){
      this.albumService.deleteAlbum(album.id).subscribe(
        () => {
          alert('Album eliminado correctamente');
          this.loadAlbumes(); //Recargar la lista
        },
        (error) => {
          console.error('Error al eliminar el album:', error);
          if(error.status== 404){
            alert('El album no fue encontrado.');
          } else{
            alert('Hubo un error al eliminar el album');
          }
        }
      );
    }
  }
  
}
