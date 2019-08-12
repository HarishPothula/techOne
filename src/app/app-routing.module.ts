import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'bob', loadChildren: './bob/bob.module#BobModule'},
  {path: 'heather', loadChildren: './heather/heather.module#HeatherModule'},
  {path: 'alex', loadChildren: './alex/alex.module#AlexModule'},
  {path: 'tim', loadChildren: './tim/tim.module#TimModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
