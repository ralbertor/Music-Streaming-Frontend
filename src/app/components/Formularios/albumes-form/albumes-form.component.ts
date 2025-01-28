import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlbumService } from '../../../services/album.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';


@Component({
  selector: 'app-albumes-form',
  standalone: false,
  
  templateUrl: './albumes-form.component.html',
  styleUrl: './albumes-form.component.css'
})
export class AlbumesFormComponent {
  albumForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private albumService: AlbumService, private router: Router){}

  ngOnInit():void{
    this.albumForm = this.fb.group({
      titulo:['', Validators.required],
      anoLanzamiento:[''],
      descripcion:[''],
      numeroCanciones:[''],
      urlPortada:[''],
     
    });
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.albumService.getAlbum(id).subscribe({
        next: (album) => {
          this.albumForm.patchValue(album);
        },
        error: (err) => {
          console.error('Error al cargar el album:', err);
        }
      });
    }
  }
  onSubmit(): void{
    if(this.albumForm.valid){
      const album = this.albumForm.value;

      if(this.isEditMode){
        const id = this.route.snapshot.params['id'];
        this.albumService.updateAlbum(id, album).subscribe({
          next: () => {
            console.log('Album actualizado exitosamente');
            this.router.navigate(['/albumes']);
          },
          error: (err) => {
            console.error('Error al actualizar el album:', err);
          }
        });
      } else{
        this.albumService.createAlbum(album).subscribe({
          next:() => {
            console.log('Album creado exitosamente');
            this.router.navigate(['/albumes']);
          },
          error: (err) => {
            console.error('Error al crear el album:', err);
          }
        });
      }
    }
  }
}
