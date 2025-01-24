import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumesCancionesComponent } from './albumes-canciones.component';

describe('AlbumesCancionesComponent', () => {
  let component: AlbumesCancionesComponent;
  let fixture: ComponentFixture<AlbumesCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumesCancionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumesCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
