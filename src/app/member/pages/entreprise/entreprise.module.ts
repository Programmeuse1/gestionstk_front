import { NgModule } from '@angular/core';
import { EntrepriseRoutingModule } from './entreprise-routing.module';
import {EntrepriseComponent} from "./entreprise.component";
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {NouvelleEntrepriseComponent} from "./nouvelle-entreprise/nouvelle-entreprise.component";
import {DeleteEntrepriseComponent} from "./delete-entreprise/delete-entreprise.component";
import {DetailEntrepriseComponent} from "./detail-entreprise/detail-entreprise.component";


@NgModule({
  declarations: [
    EntrepriseComponent,
    NouvelleEntrepriseComponent,
    DeleteEntrepriseComponent,
    DetailEntrepriseComponent

  ],
  imports: [
    SharedMemberModule,
    EntrepriseRoutingModule
  ]
})
export class EntrepriseModule { }
