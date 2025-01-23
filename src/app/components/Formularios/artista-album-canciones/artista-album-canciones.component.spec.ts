import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaAlbumCancionesComponent } from './artista-album-canciones.component';

describe('ArtistaAlbumCancionesComponent', () => {
  let component: ArtistaAlbumCancionesComponent;
  let fixture: ComponentFixture<ArtistaAlbumCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtistaAlbumCancionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistaAlbumCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
