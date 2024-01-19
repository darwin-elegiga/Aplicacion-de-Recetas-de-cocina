import { Component, Input } from '@angular/core';
import { Recetas } from '../recetas.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  @Input() receta:Recetas=new Recetas()
  @Input() indice:number=0;


}
