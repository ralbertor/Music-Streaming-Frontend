import { Component, OnInit } from '@angular/core';
import { ArtistaService } from '../../../services/artista.service';
import { Artista } from '../../../models/artista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artista-list',
  standalone: false,
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.css']
})
export class ArtistaListComponent implements OnInit {
  artistas: Artista[] = [];

  constructor(private artistaService: ArtistaService, private router: Router) {}

  ngOnInit(): void {
    this.loadArtistas();
  }

  loadArtistas(): void {
    this.artistaService.getArtistas().subscribe({
      next: (data) => (this.artistas = data),
      error: (err) => console.error('Error al cargar artistas', err)
    });
  }

  irAFormulario() {
    this.router.navigate(['/artistasForm']); // Redirige al formulario de creación
  }

  irAFormularioConAlbumesYCanciones() {
    this.router.navigate(['/artistasconAlbumesyCanciones']); // Redirige al formulario de creación
  }

  irAHome() {
    this.router.navigate(['']);
  }

  editarArtista(artistaId: number): void {
    this.router.navigate(['/artistasForm', artistaId]);
  }
  
  
  Delete(artista: Artista) {
    console.log('ID del Artista a eliminar', artista.id);
    const confirmar = confirm(
      `¿Estás seguro de que deseas eliminar el artista ${artista.nombre}?`
    );
    if (confirmar) {
      this.artistaService.deleteArtista(artista.id).subscribe(
        () => {
          alert('Artista eliminado correctamente');
          this.loadArtistas(); // Recargar la lista
        },
        (error) => {
          console.error('Error al eliminar el artista:', error);
          if (error.status == 404) {
            alert('El artista no fue encontrado.');
          } else {
            alert('Hubo un error al eliminar el artista');
          }
        }
      );
    }
  }
}
