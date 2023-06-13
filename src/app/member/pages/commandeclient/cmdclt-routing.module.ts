import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CmdcltComponent} from "./cmdclt.component";
import {NouvelleCommandeclientComponent} from "./nouvelle-commandeclient/nouvelle-commandeclient.component";

const routes: Routes = [
  {
    path:'',
    component:CmdcltComponent
  },
  {
    path:'nouvelle_commande_client',
    component:NouvelleCommandeclientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmdcltRoutingModule { }
