import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoReservasComponent } from './mantenimiento-reservas.component';

describe('MantenimientoReservasComponent', () => {
  let component: MantenimientoReservasComponent;
  let fixture: ComponentFixture<MantenimientoReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
