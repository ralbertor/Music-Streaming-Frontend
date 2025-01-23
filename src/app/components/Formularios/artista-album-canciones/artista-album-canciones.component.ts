import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ArtistaService } from '../../../services/artista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artista-form',
  templateUrl: './artista-album-canciones.component.html',
  styleUrls: ['./artista-album-canciones.component.css'],
  standalone: false,
})
export class ArtistaAlbumCancionesComponent {
  artistaForm: FormGroup;

  constructor(private fb: FormBuilder, private artistaService: ArtistaService, private router: Router) {
    this.artistaForm = this.fb.group({
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      albumes: this.fb.array([]), // FormArray para álbumes
      canciones: this.fb.array([]), // FormArray para canciones
      generos: this.fb.array([]), // FormArray para generos
    });
  }

  get generos(): FormArray {
    return this.artistaForm.get('generos') as FormArray;
  }

  get albumes(): FormArray {
    return this.artistaForm.get('albumes') as FormArray;
  }

  get canciones(): FormArray {
    return this.artistaForm.get('canciones') as FormArray;
  }

  addAlbum() {
    const albumGroup = this.fb.group({
      titulo: ['', Validators.required],
      anoLanzamiento: [null, Validators.required],
      descripcion: [''],
      numeroCanciones: [null, Validators.required],
      urlPortada: [''],
    });
    this.albumes.push(albumGroup);
  }

  removeAlbum(index: number) {
    this.albumes.removeAt(index);
  }

  addCancion() {
    const cancionGroup = this.fb.group({
      titulo: ['', Validators.required],
      duracion: [null, Validators.required],
      urlCancion: [''],
    });
    this.canciones.push(cancionGroup);
  }

  addGenero(){
    const generoGroup = this.fb.group({
      nombre: ['', Validators.required],
      anoOrigen:['', Validators.required]
    });
    this.generos.push(generoGroup);
  }
  removeCancion(index: number) {
    this.canciones.removeAt(index);
  }

  onSubmit() {
    if (this.artistaForm.valid) {
        const artistaData = {
            artista: {
                nombre: this.artistaForm.value.nombre,
                fechaNacimiento: this.artistaForm.value.fechaNacimiento,
                nacionalidad: this.artistaForm.value.nacionalidad
            },
            albumes: this.albumes.controls.map(album => ({
                titulo: album.value.titulo,
                anoLanzamiento: album.value.anoLanzamiento,
                descripcion: album.value.descripcion,
                numeroCanciones: album.value.numeroCanciones,
                urlPortada: album.value.urlPortada
            })),
            canciones: this.canciones.controls.map(cancion => ({
                titulo: cancion.value.titulo,
                duracion: cancion.value.duracion,
                urlCancion: cancion.value.urlCancion,
                generos: cancion.value.generos || [] // Si hay géneros asociados
            }))
        };

        console.log('Datos enviados:', JSON.stringify(artistaData, null, 2)); // Verifica aquí

        this.artistaService.createArtistaConAlbumYCanciones(artistaData).subscribe({
            next: (response) => {
                console.log('Artista guardado', response);
                alert('Artista creado con éxito.');
                this.router.navigate(['/artistas']);

            },
            error: (err) => {
                console.error('Error al guardar artista', err);
                alert('Hubo un problema al guardar el artista.');
            },
        });
    } else {
        alert('Por favor, completa todos los campos requeridos.');
    }
}
}
