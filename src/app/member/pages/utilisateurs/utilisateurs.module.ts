import { NgModule } from '@angular/core';
import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import {UtilisateursComponent} from "./utilisateurs.component";
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {NouvelUtilisateurComponent} from "./nouvel-utilisateur/nouvel-utilisateur.component";


@NgModule({
  declarations: [
    UtilisateursComponent,
    NouvelUtilisateurComponent
  ],
  imports: [
    SharedMemberModule,
    UtilisateursRoutingModule
  ]
})
export class UtilisateursModule { }
