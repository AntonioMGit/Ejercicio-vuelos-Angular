import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Airports } from '../entidades/airports';
import { Flights } from '../entidades/flights';
import { Reservations } from '../entidades/reservations';

@Component({
  selector: 'app-buscador-reservas',
  templateUrl: './buscador-reservas.component.html',
  styleUrls: ['./buscador-reservas.component.scss']
})
export class BuscadorReservasComponent implements OnInit {

  errorEnInvocacionHttp:boolean=false

  aeropuertos:Airports[]=[]
  origen:string=""
  destino:string=""

  reservas:Reservations[]=[]
  reservasFiltradas:Reservations[]=[]

  vuelos:Flights[]=[]

  constructor(public httpCliente:HttpClient) { }

  ngOnInit(): void {
    this.cargarAeropuertos()
    this.cargarReservas()
    this.cargarVuelos()
  }

  generarOrigenDestino(idVuelo:number|undefined) : string{
    let v = this.vuelos.find((vu) => vu.id==idVuelo)

    let origen = this.aeropuertos.find((a)=> a.codigoIata==v?.origen) 
    let destino = this.aeropuertos.find((a)=> a.codigoIata==v?.destino) 
      return "Origen: " + origen?.nombre + "; "  +
        "Destino: " + destino?.nombre
  }

  filtrarReservas(){
    let vuelosFiltrados = this.vuelos.filter((v)=>{
      console.log(v.destino + " - " + this.destino);
      console.log(v.origen + " - " + this.origen);
      
      return v.destino==this.destino
        &&v.origen==this.origen
    })
    this.reservasFiltradas=this.reservas.filter((r)=>{
      return vuelosFiltrados.find((v)=>v.id==r.vuelo)
    })
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

  cargarAeropuertos(){
    this.httpCliente.get<Airports[]>(
      environment.urlAeropuertos
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(datos:Airports[]) => {
          this.aeropuertos=datos
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
          console.log("consulta de aeropuertos termianda")
        }
      }
    )
  }

  cargarReservas(){
    this.httpCliente.get<Reservations[]>(
      environment.urlReservas
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(datos:Reservations[]) => {
          this.reservas=datos
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
          console.log("consulta de reservas termianda")
        }
      }
    )
  }

}
