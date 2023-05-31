import { NgModule } from '@angular/core';
import { MvtstkRoutingModule } from './mvtstk-routing.module';
import {MvtstkComponent} from "./mvtstk.component";
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {DetailMvtstkComponent} from "./detail-mvtstk/detail-mvtstk.component";
import {DetailComponent} from "./detail/detail.component";


@NgModule({
  declarations: [
    MvtstkComponent,
    DetailMvtstkComponent,
    DetailComponent
  ],
  imports: [
    SharedMemberModule,
    MvtstkRoutingModule
  ]
})
export class MvtstkModule { }
