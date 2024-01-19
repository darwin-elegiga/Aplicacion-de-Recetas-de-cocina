import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DsRecetasService } from '../ds-recetas.service';
import { Recetas } from '../recetas.module';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  indice:number=0;
 recetaActual:Recetas=new Recetas;
constructor(private route: ActivatedRoute, private servicio:DsRecetasService){}

ngOnInit(){
  this.indice=this.route.snapshot.params['id'];
  // alert(this.indice)
  this.recetaActual=this.servicio.findreceta(this.indice)
}




}
