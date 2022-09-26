import { Pasajero } from "./pasajero";

export class Reservations{
    constructor(
        public vuelo?:number,
        public fecha:string="",
        public pasajero:Pasajero=new Pasajero(),
        public id?:number
    ){}
}