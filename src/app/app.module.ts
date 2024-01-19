import { AdministracionComponent } from './administracion/administracion.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarRecetasComponent } from './listar-recetas/listar-recetas.component';
import { RecetasComponent } from './recetas/recetas.component';
import { InformacionComponent } from './informacion/informacion.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactosComponent } from './contactos/contactos.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { ModificarComponent } from './modificar/modificar.component';
import { FormsModule } from '@angular/forms';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarRecetasComponent,
    RecetasComponent,
    InformacionComponent,
    ContactosComponent,
    QuienessomosComponent,
    AdministracionComponent,
    ModificarComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
