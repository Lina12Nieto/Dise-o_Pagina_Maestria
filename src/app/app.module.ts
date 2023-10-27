import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './publico/pagina-maestra/encabezado/encabezado.component';
import { PiePaginaComponent } from './publico/pagina-maestra/pie-pagina/pie-pagina.component';
import { HomeComponent } from './publico/home/home.component';
import { ObjetivosComponent } from './publico/objetivos/objetivos.component';
import { ContactoComponent } from './publico/contacto/contacto.component';
import { PlanEstudiosComponent } from './publico/plan-estudios/plan-estudios.component';
import { MetodologiaComponent } from './publico/metodologia/metodologia.component';
import { ProcesoAdmisionComponent } from './publico/proceso-admision/proceso-admision.component';
import { LineasInvestigacionComponent } from './publico/lineas-investigacion/lineas-investigacion.component';
import { SeminariosComponent } from './publico/seminarios/seminarios.component';
import { TesisComponent } from './publico/tesis/tesis.component';
import { RutaNoEncontradaComponent } from './publico/ruta-no-encontrada/ruta-no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    HomeComponent,
    ObjetivosComponent,
    ContactoComponent,
    PlanEstudiosComponent,
    MetodologiaComponent,
    ProcesoAdmisionComponent,
    LineasInvestigacionComponent,
    SeminariosComponent,
    TesisComponent,
    RutaNoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
