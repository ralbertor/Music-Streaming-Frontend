import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AlbumService } from '../../../services/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albumes-canciones',
  templateUrl: './albumes-canciones.component.html',
  styleUrls: ['./albumes-canciones.component.css'],
  standalone: false,
})
export class AlbumesCancionesComponent implements OnInit {
  albumForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.albumForm = this.fb.group({
      titulo: ['', Validators.required],
      anoLanzamiento: ['', Validators.required],
      descripcion: ['', Validators.required],
      numeroCanciones: ['', Validators.required],
      urlPortada: ['', Validators.required],
      canciones: this.fb.array([]),
    });
  }

  get canciones(): FormArray {
    return this.albumForm.get('canciones') as FormArray;
  }

  addCancion(): void {
    const cancionForm = this.fb.group({
      titulo: ['', Validators.required],
      duracion: ['', Validators.required],
      urlCancion: ['', Validators.required],
      generos: this.fb.array([]),
    });
    this.canciones.push(cancionForm);
  }

  removeCancion(index: number): void {
    this.canciones.removeAt(index);
  }

  addGenero(cancionIndex: number): void {
    const generos = this.getGeneros(cancionIndex);
    const generoForm = this.fb.group({
      nombre: ['', Validators.required],
      anoOrigen: ['', Validators.required],
    });
    generos.push(generoForm);
  }

  removeGenero(cancionIndex: number, generoIndex: number): void {
    const generos = this.getGeneros(cancionIndex);
    generos.removeAt(generoIndex);
  }

  getGeneros(cancionIndex: number): FormArray {
    return this.canciones.at(cancionIndex).get('generos') as FormArray;
  }

  onSubmit(): void {
    if (this.albumForm.valid) {
      const albumData = {
        album: {
          titulo: this.albumForm.get('titulo')?.value,
          anoLanzamiento: this.albumForm.get('anoLanzamiento')?.value,
          descripcion: this.albumForm.get('descripcion')?.value,
          numeroCanciones: this.albumForm.get('numeroCanciones')?.value,
          urlPortada: this.albumForm.get('urlPortada')?.value,
        },
        canciones: this.canciones.value,
      };
      console.log('Datos enviados al backend:', JSON.stringify(albumData, null, 2));
      this.albumService.createAlbumWithCanciones(albumData).subscribe(
        (response) => {
          console.log('Álbum guardado:', response);
          this.router.navigate(['/albumes']);
        },
        (error) => {
          console.error('Error al guardar el álbum:', error);
        }
      );
    } else {
      console.error('El formulario no es válido:', this.albumForm);
    }
  }
}
