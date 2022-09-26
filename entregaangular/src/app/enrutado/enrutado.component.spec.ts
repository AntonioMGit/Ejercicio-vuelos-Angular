import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrutadoComponent } from './enrutado.component';

describe('EnrutadoComponent', () => {
  let component: EnrutadoComponent;
  let fixture: ComponentFixture<EnrutadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrutadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrutadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
