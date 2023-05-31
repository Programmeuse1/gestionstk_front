import { NgModule } from '@angular/core';
import { CategorieRoutingModule } from './categorie-routing.module';
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {CategorieComponent} from "./categorie.component";
import {NouvelleCategorieComponent} from "./nouvelle-categorie/nouvelle-categorie.component";


@NgModule({
  declarations: [
    CategorieComponent,
    NouvelleCategorieComponent
  ],
  imports: [
    SharedMemberModule,
    CategorieRoutingModule
  ]
})
export class CategorieModule { }
