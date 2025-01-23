import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaListComponent } from './components/Listar/artista-list/artista-list.component';
import { AlbumListComponent } from './components/Listar/album-list/album-list.component';
import { CancionListComponent } from './components/Listar/cancion-list/cancion-list.component';
import { ArtistasFormComponent } from './components/Formularios/artistas-form/artistas-form.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumesFormComponent } from './components/Formularios/albumes-form/albumes-form.component';
import { CancionesFormComponent } from './components/Formularios/canciones-form/canciones-form.component';
import { ArtistaAlbumCancionesComponent } from './components/Formularios/artista-album-canciones/artista-album-canciones.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artistas', component: ArtistaListComponent},
  {path: 'albumes', component: AlbumListComponent},
  {path: 'canciones', component: CancionListComponent},
  {path: 'artistasForm', component: ArtistasFormComponent},
  {path: 'albumesForm', component: AlbumesFormComponent},
  {path: 'cancionesForm', component: CancionesFormComponent},
  {path: 'artistasconAlbumesyCanciones', component: ArtistaAlbumCancionesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
