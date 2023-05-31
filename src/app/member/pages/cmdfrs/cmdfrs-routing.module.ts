import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CmdfrsComponent} from "./cmdfrs.component";

const routes: Routes = [
  {
    path:'',
    component: CmdfrsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmdfrsRoutingModule { }
