import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { Router } from '@angular/router';
import { ArtistaService } from '../../../services/artista.service';

@Component({
  selector: 'app-artistas-form',
  templateUrl: './artistas-form.component.html',
  standalone: false
})
export class ArtistasFormComponent implements OnInit {
  artistaForm!: FormGroup;

  constructor(private fb: FormBuilder, private artistaService: ArtistaService, private router: Router) { }

  ngOnInit(): void {
    this.artistaForm = this.fb.group({
      nombre: ['', Validators.required],
      fechaNacimiento: [''],
      nacionalidad: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.artistaForm.valid) {
      this.artistaService.createArtista(this.artistaForm.value).subscribe(
        response => {
          console.log('Artista guardado:', response);
          this.router.navigate(['/artistas']);
        },
        error => {
          console.error('Error al guardar el artista:', error);
        }
      );
    } else {
      console.error('El formulario no es válido');
    }
  }
}
