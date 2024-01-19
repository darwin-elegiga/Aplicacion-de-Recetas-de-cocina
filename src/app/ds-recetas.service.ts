import { Injectable } from '@angular/core';
import { Recetas } from './recetas.module';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DsRecetasService {
receta1:Recetas=new Recetas("PIZZA",["agua","azucar","queso"],"Batir bastante","./assets/fotografia-de-comida-platos7.jpg");
receta2:Recetas=new Recetas("SUPERBURGUER",["mermelada","azucar","quimbobo"],"Batir un poquito","./assets/comida-rapida-casera.webp");
receta3:Recetas=new Recetas("TACOS",["mermelada","azucar","quimbobo"],"Batir un poquito","./assets/Pancakes-caviar-plate-food_1920x1200.jpg");
receta4:Recetas=new Recetas("CERDO TRIZ",["mermelada","azucar","quimbobo"],"Batir un poquito","./assets/thumb-1920-807704.jpg");

dsrecetas:Recetas[]=[this.receta1 ,  this.receta3,this.receta2,this.receta4];

agregar(receta:Recetas){
  this.dsrecetas.push(receta);
}

findreceta(index:number):Recetas{
  return this.dsrecetas[index]
}
recetas():Recetas[]{
  return this.dsrecetas
}
modificarDs(receta:Recetas, indice:number){
  this.dsrecetas[indice].nombre=receta.nombre;
  this.dsrecetas[indice].ingredientes=receta.ingredientes;
  this.dsrecetas[indice].preparacion=receta.preparacion;
}




constructor(private route:ActivatedRoute, private router:Router){}
volveradministracion(){
    this.router.navigate(['administracion'])
}
volveinicio(){
    this.router.navigate([''])
}
}
