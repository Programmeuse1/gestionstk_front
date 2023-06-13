import { NgModule } from '@angular/core';
import { CmdcltRoutingModule } from './cmdclt-routing.module';
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {CmdcltComponent} from "./cmdclt.component";
import {NouvelleCommandeclientComponent} from "./nouvelle-commandeclient/nouvelle-commandeclient.component";
import {DetailCmdcltComponent} from "./detail-cmdclt/detail-cmdclt.component";


@NgModule({
  declarations: [
    CmdcltComponent,
    NouvelleCommandeclientComponent,
    DetailCmdcltComponent
  ],
  imports: [
    SharedMemberModule,
    CmdcltRoutingModule
  ]
})
export class CmdcltModule { }
