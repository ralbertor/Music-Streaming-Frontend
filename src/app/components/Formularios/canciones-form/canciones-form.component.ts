import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-canciones-form',
  standalone: false,
  
  templateUrl: './canciones-form.component.html',
  styleUrl: './canciones-form.component.css'
})
export class CancionesFormComponent {
  cancionForm!: FormGroup;
  constructor(private fb: FormBuilder){}

  ngOnInit():void{
    this.cancionForm=this.fb.group({
      titulo:['',Validators.required],
      duracion:[''],
      urlCancion:[''],
      artistas:[''],
      album:[''],
      generos:['']
    })
  }
  onSubmit():void{
    if(this.cancionForm.valid){
      console.log('Formulario enviado:', this.cancionForm.value);
      //Lógica para enviar a la API
    } else{
      console.log('Formulario no válido');
    }
  }

}
