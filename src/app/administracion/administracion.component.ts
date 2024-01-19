import { Component, Input, OnInit } from '@angular/core';
import { DsRecetasService } from '../ds-recetas.service';
import { Recetas } from '../recetas.module';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit{

  listado:Recetas[]=[];
  @Input() indice:number=0;
  eliminar(i:number){
    this.servicio.dsrecetas.splice(i,1)
  }
  modificar(){

  }
  constructor(private servicio : DsRecetasService){}
  ngOnInit(): void {
    this.listado=this.servicio.recetas();
  }
}
