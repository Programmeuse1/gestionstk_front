import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CmdcltComponent} from "./cmdclt.component";
import {NouvelleCommandeclientComponent} from "./nouvelle-commandeclient/nouvelle-commandeclient.component";
import {CommandeclientResolveService} from "./resolve/commandeclient-resolve.service";
import {DetailCmdcltComponent} from "./detail-cmdclt/detail-cmdclt.component";

const routes: Routes = [
  {
    path:'',
    component:CmdcltComponent
  },
  {
    path:'update/:id',
    component:NouvelleCommandeclientComponent,
    resolve: {
      commandeClient: CommandeclientResolveService
    }
  },
  {
    path:'detail/:id',
    component: DetailCmdcltComponent,
    resolve: {
      commandeClient: CommandeclientResolveService
    }
  },
  {
    path:'nouvelle_commande_client',
    component: NouvelleCommandeclientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmdcltRoutingModule { }
