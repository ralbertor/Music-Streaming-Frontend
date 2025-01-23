import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlbumService } from '../../../services/album.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-albumes-form',
  standalone: false,
  
  templateUrl: './albumes-form.component.html',
  styleUrl: './albumes-form.component.css'
})
export class AlbumesFormComponent {
  albumForm!: FormGroup;

  constructor(private fb: FormBuilder, private albumService: AlbumService, private router: Router){}

  ngOnInit():void{
    this.albumForm = this.fb.group({
      titulo:['', Validators.required],
      anoLanzamiento:[''],
      descripcion:[''],
      numeroCanciones:[''],
      urlPortada:[''],
     
    });
  }
  onSubmit(): void{
    if(this.albumForm.valid){
      this.albumService.createAlbum(this.albumForm.value).subscribe(
        response => {
          console.log('Álbum guardado:', response);
          this.router.navigate(['/albumes']);
        },
        error => {
          console.error('Error al guardar el álbum:', error);
        }
      );
      
    }else{
      console.log('Formulario no válido');
    }
  }
}
