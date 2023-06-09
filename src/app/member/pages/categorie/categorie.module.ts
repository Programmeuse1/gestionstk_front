import { NgModule } from '@angular/core';
import { CategorieRoutingModule } from './categorie-routing.module';
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {CategorieComponent} from "./categorie.component";
import {NouvelleCategorieComponent} from "./nouvelle-categorie/nouvelle-categorie.component";
import {DeleteCategorieComponent} from "./delete-categorie/delete-categorie.component";
import {DetailCategorieComponent} from "./detail-categorie/detail-categorie.component";


@NgModule({
  declarations: [
    CategorieComponent,
    NouvelleCategorieComponent,
    DeleteCategorieComponent,
    DetailCategorieComponent
  ],
  imports: [
    SharedMemberModule,
    CategorieRoutingModule
  ]
})
export class CategorieModule { }
