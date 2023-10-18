import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClientePageComponent } from './pages/home-cliente-page/home-cliente-page.component';
import { NuevoClientePageComponent } from './pages/nuevo-cliente-page/nuevo-cliente-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';

const routes: Routes = [
  { path: 'home',  component: HomeClientePageComponent},
  { path: 'nuevo', component: NuevoClientePageComponent},
  { path: 'contacto', component: ContactoPageComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
