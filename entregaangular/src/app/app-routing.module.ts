import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuscadorReservasComponent } from './buscador-reservas/buscador-reservas.component';
import { MantenimientoReservasComponent } from './mantenimiento-reservas/mantenimiento-reservas.component';
import { MantenimientoVuelosComponent } from './mantenimiento-vuelos/mantenimiento-vuelos.component';
import { VisorVuelosComponent } from './visor-vuelos/visor-vuelos.component';

const routes: Routes = [
  {
    path:"mantenimiento-vuelos",component:MantenimientoVuelosComponent
  },
  {
    path:"mantenimiento-reservas",component:MantenimientoReservasComponent
  },
  {
    path:"buscador-reservas",component:BuscadorReservasComponent
  },
  {
    path:"visor-vuelos",component:VisorVuelosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
