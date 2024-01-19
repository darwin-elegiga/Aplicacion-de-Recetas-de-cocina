import { Component } from '@angular/core';
import { DsRecetasService } from '../ds-recetas.service';
import { Recetas } from '../recetas.module';

@Component({
  selector: 'app-listar-recetas',
  templateUrl: './listar-recetas.component.html',
  styleUrls: ['./listar-recetas.component.css']
})
export class ListarRecetasComponent {

  listadorecetas:Recetas[]=[]


  constructor(private servicio: DsRecetasService){}
  ngOnInit(){
    this.listadorecetas=this.servicio.dsrecetas;

  }
}
