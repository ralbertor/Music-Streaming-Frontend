import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-albumes-form',
  standalone: false,
  
  templateUrl: './albumes-form.component.html',
  styleUrl: './albumes-form.component.css'
})
export class AlbumesFormComponent {
  albumForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit():void{
    this.albumForm = this.fb.group({
      titulo:['', Validators.required],
      anolanzamiento:[''],
      descripcion:[''],
      numeroCanciones:[''],
      urlPortada:[''],
      artista:[''],
      canciones:['']
    });
  }
  onSubmit(): void{
    if(this.albumForm.valid){
      console.log('Formulario enviado:',this.albumForm.value);
      //Lógica para enviar a la API
    }else{
      console.log('Formulario no válido');
    }
  }
}
