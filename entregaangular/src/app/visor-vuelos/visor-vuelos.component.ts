import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Flights } from '../entidades/flights';

@Component({
  selector: 'app-visor-vuelos',
  templateUrl: './visor-vuelos.component.html',
  styleUrls: ['./visor-vuelos.component.scss']
})
export class VisorVuelosComponent implements OnInit {

  errorEnInvocacionHttp:boolean=false

  vuelos:Flights[]=[]

  constructor(public httpCliente:HttpClient) { }

  ngOnInit(): void {
    this.cargarVuelos()
  }

  eliminar(cod:number|undefined){

    this.httpCliente.delete(
      environment.urlVuelos + "/" +cod
    ).subscribe({
      next: data => {
        
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })

    this.cargarVuelos()
  }

  cargarVuelos(){
    this.httpCliente.get<Flights[]>(
      environment.urlVuelos
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(datos:Flights[]) => {
          this.vuelos=datos
          this.errorEnInvocacionHttp=false
        },
        //para tratar errores
        error:(error:HttpErrorResponse) =>{
          this.errorEnInvocacionHttp=true
          if(error.status==404){
            console.log("error 404")
          }else if(error.status==500){
            console.log(error.error)
          }
        },
        //saber cuando termina la invocacion
        complete:()=>{
          console.log("consulta de vuelos termianda")
        }
      }
    )
  }

}
