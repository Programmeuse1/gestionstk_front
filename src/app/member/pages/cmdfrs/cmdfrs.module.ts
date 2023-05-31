import { NgModule } from '@angular/core';
import { CmdfrsRoutingModule } from './cmdfrs-routing.module';
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {CmdfrsComponent} from "./cmdfrs.component";
import {NouveauFournisseurComponent} from "./nouveau-fournisseur/nouveau-fournisseur.component";
import {DetailCmfrsComponent} from "./detail-cmfrs/detail-cmfrs.component";



@NgModule({
  declarations: [
    CmdfrsComponent,
    NouveauFournisseurComponent,
    DetailCmfrsComponent
  ],
  imports: [
    SharedMemberModule,
    CmdfrsRoutingModule
  ]
})
export class CmdfrsModule { }
