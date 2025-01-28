import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistaService } from '../../../services/artista.service';

@Component({
  selector: 'app-artistas-form',
  templateUrl: './artistas-form.component.html',
  styleUrls: ['./artistas-form.component.css'],
  standalone:false,
})
export class ArtistasFormComponent implements OnInit {
  artistaForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private artistaService: ArtistaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.artistaForm = this.fb.group({
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      nacionalidad: ['', Validators.required]
    });

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.artistaService.getArtista(id).subscribe({
        next: (artista) => {
          this.artistaForm.patchValue(artista);
        },
        error: (err) => {
          console.error('Error al cargar el artista:', err);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.artistaForm.valid) {
      const artista = this.artistaForm.value;

      if (this.isEditMode) {
        const id = this.route.snapshot.params['id'];
        this.artistaService.updateArtista(id, artista).subscribe({
          next: () => {
            console.log('Artista actualizado exitosamente');
            this.router.navigate(['/artistas']);
          },
          error: (err) => {
            console.error('Error al actualizar el artista:', err);
          }
        });
      } else {
        this.artistaService.createArtista(artista).subscribe({
          next: () => {
            console.log('Artista creado exitosamente');
            this.router.navigate(['/artistas']);
          },
          error: (err) => {
            console.error('Error al crear el artista:', err);
          }
        });
      }
    }
  }
}
