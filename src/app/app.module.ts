import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { GenerosComponent } from './components/generos/generos.component';
import { ArtistaListComponent } from './components/artista-list/artista-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ArtistasComponent,
    AlbumesComponent,
    CancionesComponent,
    GenerosComponent,
    ArtistaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
