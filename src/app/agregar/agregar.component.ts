import { Component } from '@angular/core';
import { DsRecetasService } from '../ds-recetas.service';
import { Recetas } from '../recetas.module';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  nombre:string="";
  preparacion:string="";
  ingrediente:string=""
  ingredientes:string[]=[];
  imagen:string="";

  nuevareceta:Recetas=new Recetas();

  agregaringrediente(){
    this.ingredientes.push(this.ingrediente)
  }
  agregarreceta(){
    this.nuevareceta.nombre=this.nombre;
    this.nuevareceta.ingredientes=this.ingredientes;
    this.nuevareceta.preparacion=this.preparacion;
    this.servicio.agregar(this.nuevareceta)
    this.servicio.volveradministracion()
  }
  constructor(private servicio:DsRecetasService) {}


}
