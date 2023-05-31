import { NgModule } from '@angular/core';


import { DashboardRoutingModule } from './dashboard-routing.module';
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {DashboardComponent} from "./dashboard.component";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedMemberModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
