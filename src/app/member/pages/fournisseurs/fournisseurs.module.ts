import { NgModule } from '@angular/core';
import { FournisseursRoutingModule } from './fournisseurs-routing.module';
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {FournisseursComponent} from "./fournisseurs.component";
import {NouveauFournisseurComponent} from "./nouveau-fournisseur/nouveau-fournisseur.component";


@NgModule({
  declarations: [
    FournisseursComponent,
    NouveauFournisseurComponent
  ],
  imports: [
    SharedMemberModule,
    FournisseursRoutingModule
  ]
})
export class FournisseursModule { }
