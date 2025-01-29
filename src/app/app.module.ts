import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { GenerosComponent } from './components/generos/generos.component';
import { ArtistaListComponent } from './components/Listar/artista-list/artista-list.component';
import { AlbumListComponent } from './components/Listar/album-list/album-list.component';
import { CancionListComponent } from './components/Listar/cancion-list/cancion-list.component';
import { ArtistasFormComponent } from './components/Formularios/artistas-form/artistas-form.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumesFormComponent } from './components/Formularios/albumes-form/albumes-form.component';
import { CancionesFormComponent } from './components/Formularios/canciones-form/canciones-form.component';
import { ArtistaAlbumCancionesComponent } from './components/Formularios/artista-album-canciones/artista-album-canciones.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AlbumesCancionesComponent } from './components/Formularios/albumes-canciones/albumes-canciones.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artistas', component: ArtistaListComponent},
  {path: 'albumes', component: AlbumListComponent},
  {path: 'canciones', component: CancionListComponent},
  {path: 'artistasForm', component: ArtistasFormComponent},
  {path: 'albumesForm', component: AlbumesFormComponent},
  {path: 'cancionesForm', component: CancionesFormComponent},
  {path: 'artistasconAlbumesyCanciones', component: ArtistaAlbumCancionesComponent},
  {path: 'albumesconCanciones', component: AlbumesCancionesComponent},
  {path: 'artistasForm/:id', component: ArtistasFormComponent},
  {path: 'albumesForm/:id', component: AlbumesFormComponent},
  {path: 'cancionesForm/:id', component: CancionesFormComponent},
];

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
    ArtistaAlbumCancionesComponent,
    AlbumesCancionesComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatOptionModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    provideHttpClient(withFetch()), 
    provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }