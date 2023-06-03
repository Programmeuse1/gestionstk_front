import { NgModule } from '@angular/core';
import { VenteRoutingModule } from './vente-routing.module';
import {VenteComponent} from "./vente.component";
import {NouvelleVenteComponent} from "./nouvelle-vente/nouvelle-vente.component";
import {SharedMemberModule} from "../../shared-member/shared-member.module";


@NgModule({
  declarations: [
    VenteComponent,
    NouvelleVenteComponent
  ],
  imports: [
    SharedMemberModule,
    VenteRoutingModule
  ]
})
export class VenteModule { }
