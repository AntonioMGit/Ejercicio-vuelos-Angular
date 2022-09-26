import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoVuelosComponent } from './mantenimiento-vuelos.component';

describe('MantenimientoVuelosComponent', () => {
  let component: MantenimientoVuelosComponent;
  let fixture: ComponentFixture<MantenimientoVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoVuelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
