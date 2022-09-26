import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Airports } from '../entidades/airports';
import { Flights } from '../entidades/flights';
import { Pasajero } from '../entidades/pasajero';
import { Reservations } from '../entidades/reservations';

@Component({
  selector: 'app-mantenimiento-reservas',
  templateUrl: './mantenimiento-reservas.component.html',
  styleUrls: ['./mantenimiento-reservas.component.scss']
})
export class MantenimientoReservasComponent implements OnInit {
  
  errorEnInvocacionHttp:boolean=false

  vuelos:Flights[]=[]
  aeropuertos:Airports[]=[]

  reserva:Reservations=new Reservations()

  origenDestino:string[]=[]

  constructor(public httpCliente:HttpClient) { }

  ngOnInit(): void {
    this.cargarAeropuertos()
    this.cargarVuelos()
    //this.generarOrigenDestino()
  }

  crearReserva(){
    this.httpCliente.post<Reservations>(
      environment.urlReservas,
      this.reserva
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(mat:Reservations) => {
          //this.clientes.push(cli)
          this.errorEnInvocacionHttp=false
          console.log(this.reserva);
          this.reserva=new Reservations()
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
          console.log("insertado reserva")
        }
      }
    )
  }

  generarOrigenDestino(v:Flights) : string{
    //this.vuelos.forEach((v)=>{
      let origen = this.aeropuertos.find((a)=> a.codigoIata==v.origen) 
      let destino = this.aeropuertos.find((a)=> a.codigoIata==v.destino) 
      //this.origenDestino.push(
        return "Origen: " + origen?.nombre + "; "  +
          "Destino: " + destino?.nombre
      //)
    }
    //)
  //}

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

}
