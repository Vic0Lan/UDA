import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApprofondimentiComponent } from './pages/approfondimenti/approfondimenti.component';
import { CalcolatoreComponent } from './pages/calcolatore/calcolatore.component';
import { LinksComponent } from './pages/links/links.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'home', component: LandingPageComponent},
  {path:'more', component:ApprofondimentiComponent},
  {path:'links', component:LinksComponent},
  {path:'calculate', component:CalcolatoreComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
