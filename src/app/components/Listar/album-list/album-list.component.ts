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
  page: number = 0; //página principal
  size: number = 10; //Tamaño de la página
  totalPages:number = 0;
  constructor(private albumService: AlbumService, private router: Router){}
  ngOnInit():void{
    this.loadAlbumes();
  }

  loadAlbumes(): void{
    this.albumService.getAlbumes(this.page, this.size).subscribe({
      next: (data) => (this.albumes = data.content, this.totalPages = data.totalPages),
      error: (err) => console.error('Error al cargar artistas', err),

  });
  }
  cambiarPagina(incremeto: number): void{
    if(this.page + incremeto >= 0 && this.page + incremeto < this.totalPages){
      this.page += incremeto;
      this.loadAlbumes();
    }
  }
  irAFormulario(): void{
    this.router.navigate(['/albumesForm']) 
  }
  irAFormularioCanciones() {
    this.router.navigate(['/albumesconCanciones']);  // Redirige al formulario de creación
  }
  irAHome(): void {
    this.router.navigate(['']);
  }
  editarAlbum(albumId: number): void{
    this.router.navigate(['/albumesForm', albumId]);
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
