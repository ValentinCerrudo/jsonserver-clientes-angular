import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClienteComponent } from './components/cliente/listar-cliente/listar-cliente.component';
import { NuevoClienteComponent } from './components/cliente/nuevo-cliente/nuevo-cliente.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HomeClientePageComponent } from './pages/home-cliente-page/home-cliente-page.component';
import { NuevoClientePageComponent } from './pages/nuevo-cliente-page/nuevo-cliente-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactoComponent } from './components/cliente/contacto/contacto.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    NuevoClienteComponent,
    NavBarComponent,
    HomeClientePageComponent,
    NuevoClientePageComponent,
    ContactoPageComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
