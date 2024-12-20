import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaListComponent } from './components/artista-list/artista-list.component';

const routes: Routes = [
  {path: 'artistas', component: ArtistaListComponent},
  {path: '', redirectTo: '/artistas', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
