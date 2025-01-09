import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtistaService } from '../../../../../Streaming-Frontend/src/app/services/artista.service';
import { error } from 'console';

@Component({
  selector: 'app-artistas-form',
  templateUrl: './artistas-form.component.html',
  standalone: false
})
export class ArtistasFormComponent implements OnInit {
  artistaForm!: FormGroup;

  constructor(private fb: FormBuilder, private artistaService: ArtistaService) { }

  ngOnInit(): void {
    this.artistaForm = this.fb.group({
      nombre: ['', Validators.required],
      fechaNacimiento: [''],
      nacionalidad: ['', Validators.required],
      albumes: [''],
      canciones: ['']
    });
  }

  onSubmit(): void {
    if (this.artistaForm.valid) {
      this.artistaService.createArtista(this.artistaForm.value).subscribe(
        response => {
      console.log('Formulario enviado:', this.artistaForm.value);
      // Aquí iría la lógica para enviar el formulario a la API
    },
    error => {
      console.log('Error al guardar el artista:', error);
    }
  );
    } else {
      console.error('El formulario no es válido');
    }
  }
}
