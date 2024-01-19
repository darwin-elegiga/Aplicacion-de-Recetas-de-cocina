import { Component, OnInit } from '@angular/core';
import { Recetas } from '../recetas.module';
import { ActivatedRoute, Router } from '@angular/router';
import { DsRecetasService } from '../ds-recetas.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent  implements OnInit{
  nombre:string="";
  preparacion:string="";
  ingredientes:string[]=[]
  indice:number=0;
  recetamodificada:Recetas=new Recetas();
  nuevoingrediente:string="";

  modificar(){
      this.recetamodificada.nombre=this.nombre;
      this.recetamodificada.ingredientes=this.ingredientes;
      this.recetamodificada.preparacion=this.preparacion;

      this.servicio.modificarDs(this.recetamodificada,this.indice)
      this.servicio.volveradministracion();
  }
  agregaringrediente(){
    this.recetamodificada.ingredientes.push(this.nuevoingrediente)
  }
  constructor(private route:ActivatedRoute, private servicio: DsRecetasService, private router:Router){}
  ngOnInit(): void {
    this.indice=this.route.snapshot.params['id']

    this.recetamodificada=this.servicio.findreceta(this.indice)
    this.nombre=this.recetamodificada.nombre
    this.ingredientes=this.recetamodificada.ingredientes
    this.preparacion=this.recetamodificada.preparacion
  }
  // volverinicio(){
  //     this.router.navigate(['administracion'])
  // }
}
