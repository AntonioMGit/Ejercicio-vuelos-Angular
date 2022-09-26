import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Airports } from '../entidades/airports';
import { Companies } from '../entidades/companies';
import { Flights } from '../entidades/flights';

@Component({
  selector: 'app-mantenimiento-vuelos',
  templateUrl: './mantenimiento-vuelos.component.html',
  styleUrls: ['./mantenimiento-vuelos.component.scss']
})
export class MantenimientoVuelosComponent implements OnInit {

  errorEnInvocacionHttp:boolean=false

  vuelo:Flights=new Flights()

  aeropuertos:Airports[]=[]
  aeropuertosDestino:Airports[]=[]
  aeropuertosOrigen:Airports[]=[]
  companias:Companies[]=[]

  constructor(public httpCliente:HttpClient) { }

  ngOnInit(): void {
    this.cargarAeropuertos()
    this.cargarCompanias()
  }

  origenSeleccionado(){
    this.aeropuertosDestino=this.aeropuertos
    this.aeropuertosDestino=this.aeropuertosDestino.filter((a)=>a.codigoIata!=this.vuelo.origen)
  }
  destinoSeleccionado(){
    this.aeropuertosOrigen=this.aeropuertos
    this.aeropuertosOrigen=this.aeropuertosOrigen.filter((a)=>a.codigoIata!=this.vuelo.destino)
  }

  crearVuelo(){
    this.httpCliente.post<Flights>(
      environment.urlVuelos,
      this.vuelo
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(mat:Flights) => {
          //this.clientes.push(cli)
          this.errorEnInvocacionHttp=false
          console.log(this.vuelo);
          this.vuelo=new Flights()
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
          console.log("insertado vuelo")
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
          this.aeropuertosDestino=datos
          this.aeropuertosOrigen=datos
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

  cargarCompanias(){
    this.httpCliente.get<Companies[]>(
      environment.urlCompanias
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(datos:Companies[]) => {
          this.companias=datos
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
          console.log("consulta de companias termianda")
        }
      }
    )
  }

}
