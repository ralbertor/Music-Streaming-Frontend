import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { GenerosComponent } from './components/generos/generos.component';
import { ArtistaListComponent } from './components/Listar/artista-list/artista-list.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AlbumListComponent } from './components/Listar/album-list/album-list.component';
import { CancionListComponent } from './components/Listar/cancion-list/cancion-list.component';
import { ArtistasFormComponent } from './components/Formularios/artistas-form/artistas-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AlbumesFormComponent } from './components/Formularios/albumes-form/albumes-form.component';
import { CancionesFormComponent } from './components/Formularios/canciones-form/canciones-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistasComponent,
    AlbumesComponent,
    CancionesComponent,
    GenerosComponent,
    ArtistaListComponent,
    AlbumListComponent,
    CancionListComponent,
    ArtistasFormComponent,
    HomeComponent,
    AlbumesFormComponent,
    CancionesFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,          // Módulo para las tarjetas
    MatFormFieldModule,     // Campo de formulario
    MatInputModule,         // Inputs
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
