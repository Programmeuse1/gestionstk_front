import { NgModule } from '@angular/core';
import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import {SharedMemberModule} from "./shared-member/shared-member.module";
import {LayoutsModule} from "./layouts/layouts.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MemberComponent
  ],
  imports: [
    SharedMemberModule,
    LayoutsModule,
    SharedModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
