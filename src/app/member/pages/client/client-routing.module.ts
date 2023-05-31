import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategorieComponent} from "../categorie/categorie.component";
import {ClientComponent} from "./client.component";

const routes: Routes = [
  {
    path:'',
    component: ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
