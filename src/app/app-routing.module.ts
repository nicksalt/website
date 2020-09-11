import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MyWorkComponent} from './home/my-work/my-work.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: '', component: MyWorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
