import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorReservasComponent } from './buscador-reservas.component';

describe('BuscadorReservasComponent', () => {
  let component: BuscadorReservasComponent;
  let fixture: ComponentFixture<BuscadorReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
