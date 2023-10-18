import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaRoutingModule } from './pagina-routing.module';
import { EncabezadoComponent } from './publico/encabezado/encabezado.component';
import { PiePaginaComponent } from './publico/pie-pagina/pie-pagina.component';
import { ContactoComponent } from './publico/contacto/contacto.component';
import { MisionVisionComponent } from './publico/mision-vision/mision-vision.component';


@NgModule({
  declarations: [
    EncabezadoComponent,
    PiePaginaComponent,
    ContactoComponent,
    MisionVisionComponent
  ],
  imports: [
    CommonModule,
    PaginaRoutingModule
  ]
})
export class PaginaModule { }
