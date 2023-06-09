import { NgModule } from '@angular/core';
import { FournisseursRoutingModule } from './fournisseurs-routing.module';
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {FournisseursComponent} from "./fournisseurs.component";
import {NouveauFournisseurComponent} from "./nouveau-fournisseur/nouveau-fournisseur.component";
import {DeleteFournisseurComponent} from "./delete-fournisseur/delete-fournisseur.component";
import {DetailFournisseurComponent} from "./detail-fournisseur/detail-fournisseur.component";


@NgModule({
  declarations: [
    FournisseursComponent,
    NouveauFournisseurComponent,
    DeleteFournisseurComponent,
    DetailFournisseurComponent
  ],
  imports: [
    SharedMemberModule,
    FournisseursRoutingModule
  ]
})
export class FournisseursModule { }
