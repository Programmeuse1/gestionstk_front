import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MvtstkComponent} from "./mvtstk.component";

const routes: Routes = [
  {
    path:'',
    component: MvtstkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvtstkRoutingModule { }
