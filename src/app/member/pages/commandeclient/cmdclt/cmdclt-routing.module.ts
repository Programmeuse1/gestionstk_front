import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CmdcltComponent} from "./cmdclt.component";

const routes: Routes = [
  {
    path:'',
    component:CmdcltComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmdcltRoutingModule { }