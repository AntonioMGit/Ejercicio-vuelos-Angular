export class Flights{
    constructor(
        public origen:string="",
        public destino:string="",
        public companies:string[]=[],
        public fechaDesde:string="",
        public fechaHasta:string="",
        public duracion?:number,
        public id?:number
    ){}
}