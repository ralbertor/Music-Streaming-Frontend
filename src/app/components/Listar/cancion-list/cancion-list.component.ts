import { Component, OnInit } from '@angular/core';
import { Cancion } from '../../../models/cancion.model';
import { CancionService } from '../../../services/cancion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancion-list',
  standalone: false,
  
  templateUrl: './cancion-list.component.html',
  styleUrls: ['./cancion-list.component.css']
})
export class CancionListComponent implements OnInit{
  canciones: Cancion[] = [];
  page: number = 0;
  size: number = 10;
  totalPages: number =0;
  constructor(private cancionService: CancionService, private router: Router){}
  ngOnInit():void{
    this.loadCanciones();
  }

  loadCanciones():void{
    this.cancionService.getCanciones(this.page, this.size).subscribe({
      next: (data) => (this.canciones = data.content, this.totalPages = data.totalPages),
      error: (err) => console.error('Error al cargar canciones', err),
    });
  }

  cambiarPagina(incremeto: number): void{
    if(this.page + incremeto >= 0 && this.page + incremeto < this.totalPages){
      this.page += incremeto;
      this.loadCanciones();
    }
  }
  irAFormulario(){
    this.router.navigate(['/cancionesForm']);
  }

  irAHome() {
    this.router.navigate(['']);
  }

  editarCancion(cancionId: number): void {
    this.router.navigate(['/cancionesForm', cancionId]);
  }
  Delete(cancion:Cancion){
        console.log('ID de la canción a eliminar', cancion.id);
        const confirmar = confirm(
          `¿Estas seguro de que deseas eliminar la canción ${cancion.titulo}?`
        );
        if (confirmar){
          this.cancionService.deleteCancion(cancion.id).subscribe(
            () => {
              alert('Canción eliminada correctamente');
              this.loadCanciones(); //Recargar la lista
            },
            (error) => {
              console.error('Error al eliminar la canción:', error);
              if(error.status== 404){
                alert('La canción no fue encontrado.');
              } else{
                alert('Hubo un error al eliminar la canción');
              }
            }
          );
        }
      }
}
