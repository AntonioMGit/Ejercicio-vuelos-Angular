import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MantenimientoVuelosComponent } from './mantenimiento-vuelos/mantenimiento-vuelos.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisorVuelosComponent } from './visor-vuelos/visor-vuelos.component';
import { MantenimientoReservasComponent } from './mantenimiento-reservas/mantenimiento-reservas.component';
import { BuscadorReservasComponent } from './buscador-reservas/buscador-reservas.component';
import { EnrutadoComponent } from './enrutado/enrutado.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MantenimientoVuelosComponent,
    VisorVuelosComponent,
    MantenimientoReservasComponent,
    BuscadorReservasComponent,
    EnrutadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    //MantenimientoVuelosComponent,
    //AppComponent
    //VisorVuelosComponent
    //MantenimientoReservasComponent
    //BuscadorReservasComponent
    EnrutadoComponent
  ]
})
export class AppModule { }
