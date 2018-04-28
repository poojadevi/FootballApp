import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionScreenComponent } from './competition-screen/competition-screen.component';
import { TeamscreenComponent } from './teamscreen/teamscreen.component';

const routes: Routes = [
{
path:'competition',
component:CompetitionScreenComponent
},{
path:'teamScreen/:id',
component:TeamscreenComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
