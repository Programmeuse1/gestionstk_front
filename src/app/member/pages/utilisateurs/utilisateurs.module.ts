import { NgModule } from '@angular/core';
import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import {UtilisateursComponent} from "./utilisateurs.component";
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {NouvelUtilisateurComponent} from "./nouvel-utilisateur/nouvel-utilisateur.component";
import {DeleteUtilisateurComponent} from "./delete-utilisateur/delete-utilisateur.component";
import {DetailUtilisateurComponent} from "./detail-utilisateur/detail-utilisateur.component";


@NgModule({
  declarations: [
    UtilisateursComponent,
    NouvelUtilisateurComponent,
    DeleteUtilisateurComponent,
    DetailUtilisateurComponent
  ],
  imports: [
    SharedMemberModule,
    UtilisateursRoutingModule
  ]
})
export class UtilisateursModule { }
