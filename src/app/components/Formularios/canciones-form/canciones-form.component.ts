import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CancionService } from '../../../services/cancion.service';

@Component({
  selector: 'app-canciones-form',
  standalone: false,
  
  templateUrl: './canciones-form.component.html',
  styleUrl: './canciones-form.component.css'
})
export class CancionesFormComponent {
  cancionForm!: FormGroup;
  constructor(private fb: FormBuilder, private cancionService:CancionService, private router: Router){}

  ngOnInit():void{
    this.cancionForm=this.fb.group({
      titulo:['',Validators.required],
      duracion:[''],
      urlCancion:[''],
    })
  }
  onSubmit(): void {
    if (this.cancionForm.valid) {
      console.log('Datos del formulario:', this.cancionForm.value); // Añade este log para verificar los datos
      this.cancionService.createCancion(this.cancionForm.value).subscribe(
        response => {
          console.log('Canción guardada:', response);
          // Redirigir a la lista de canciones o mostrar un mensaje de éxito
          this.router.navigate(['/canciones']);
        },
        error => {
          console.error('Error al guardar la canción:', error);
        }
      );
    } else {
      console.error('El formulario no es válido');
    }
  }

}
