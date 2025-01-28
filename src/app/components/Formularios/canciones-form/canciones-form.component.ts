import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CancionService } from '../../../services/cancion.service';

@Component({
  selector: 'app-canciones-form',
  standalone: false,
  
  templateUrl: './canciones-form.component.html',
  styleUrl: './canciones-form.component.css'
})
export class CancionesFormComponent {
  cancionForm!: FormGroup;
  isEditMode: boolean = false;
  constructor(private fb: FormBuilder, private route: ActivatedRoute ,private cancionService:CancionService, private router: Router){}

  ngOnInit():void{
    this.cancionForm=this.fb.group({
      titulo:['',Validators.required],
      duracion:[''],
      urlCancion:[''],
    });
    const id = this.route.snapshot.params['id'];
    if (id){
      this.isEditMode = true;
      this.cancionService.getCancion(id).subscribe({
        next: (cancion) => {
          this.cancionForm.patchValue(cancion);
        },
        error: (err) => {
          console.error('Error al cargar la canción:', err);
        }
      });
    }
  }
  onSubmit(): void {
    if (this.cancionForm.valid) {
      const cancion = this.cancionForm.value;
      if(this.isEditMode){
        const id = this.route.snapshot.params['id'];
        this.cancionService.updateCancion(id, cancion).subscribe({
          next: () => {
            console.log('Canción actualizada exitosamente');
            this.router.navigate(['/canciones']);
          },
          error: (err) => {
            console.error('Error al actualizar la canción:', err);
          }
        });
      } else {
        this.cancionService.createCancion(cancion).subscribe({
          next: () => {
            console.log('Canción creada exitosamente');
            this.router.navigate(['/canciones']);
          },
          error: (err) => {
            console.error('Error al crear la canción:', err);
          }
        });
      }
    }
  }
}
