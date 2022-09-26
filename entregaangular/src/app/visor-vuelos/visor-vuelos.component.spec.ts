import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorVuelosComponent } from './visor-vuelos.component';

describe('VisorVuelosComponent', () => {
  let component: VisorVuelosComponent;
  let fixture: ComponentFixture<VisorVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisorVuelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisorVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
