import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { BlogComponent } from './blog/blog.component';
import { HabilidadesTecnicasComponent } from './habilidades-tecnicas/habilidades-tecnicas.component';
import { Articulo1Component } from './articulo1/articulo1.component';
import { Articulo2Component } from './articulo2/articulo2.component';
import { InicioComponent } from './inicio/inicio.component';
const routes: Routes = [
  {path:'Contacto',component:ContactoComponent},
  {path:'',component:InicioComponent},
  {path:'Blog',component:BlogComponent},
  {path:'Habilidades',component:HabilidadesTecnicasComponent},
  {path:'articulo1',component:Articulo1Component},
  {path:'articulo2',component:Articulo2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
