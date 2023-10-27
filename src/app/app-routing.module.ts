import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './publico/home/home.component';
import { ContactoComponent } from './publico/contacto/contacto.component';
import { ObjetivosComponent } from './publico/objetivos/objetivos.component';
import { LineasInvestigacionComponent } from './publico/lineas-investigacion/lineas-investigacion.component';
import { RutaNoEncontradaComponent } from './publico/ruta-no-encontrada/ruta-no-encontrada.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "contacto",
    component: ContactoComponent
  },
  {
    path: "objetivos",
    component: ObjetivosComponent
  },
  {
    path: "lineasInvestigacion",
    component: LineasInvestigacionComponent
  },
  {
    path:"**",
    component: RutaNoEncontradaComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
