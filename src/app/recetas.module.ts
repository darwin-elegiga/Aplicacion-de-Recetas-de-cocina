export class Recetas{
  nombre:string=""
  ingredientes:string[]=[];
  preparacion:string="";
  imagen:string=""
  constructor(nombre:string="",ingredientes:string[]=[],preparacion:string="",imagen:string=""){
    this.nombre=nombre;
    this.ingredientes=ingredientes;
    this.preparacion=preparacion;
    this.imagen=imagen;
  }
}
