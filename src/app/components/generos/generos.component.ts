import { Component, OnInit } from '@angular/core';
import { GeneroService } from '../../services/genero.service';


@Component({
  selector: 'app-generos',
  standalone: false,
  
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.css'
})
export class GenerosComponent implements OnInit{
  generos: any[] = [];
  constructor(private generoService: GeneroService){}
  ngOnInit(): void {
      this.generoService.getGeneros().subscribe(generos =>
        this.generos=generos     
      );
  }
}
