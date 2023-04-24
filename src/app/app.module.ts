import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { HabilidadesTecnicasComponent } from './habilidades-tecnicas/habilidades-tecnicas.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Articulo1Component } from './articulo1/articulo1.component';
import { Articulo2Component } from './articulo2/articulo2.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    HabilidadesTecnicasComponent,
    BlogComponent,
    ContactoComponent,
    Articulo1Component,
    Articulo2Component,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
