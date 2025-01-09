import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumesFormComponent } from './albumes-form.component';

describe('AlbumesFormComponent', () => {
  let component: AlbumesFormComponent;
  let fixture: ComponentFixture<AlbumesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
