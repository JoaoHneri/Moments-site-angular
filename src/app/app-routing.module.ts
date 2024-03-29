import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewMomentComponent } from './pages/new-moment/new-moment.component';
import { IndivMomentComponent } from './pages/indiv-moment/indiv-moment.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'moments/new', component:NewMomentComponent},
  {path: 'moments/:id/detalhes', component:IndivMomentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
