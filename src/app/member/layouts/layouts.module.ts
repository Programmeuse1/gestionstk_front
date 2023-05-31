import { NgModule } from '@angular/core';
import {SharedMemberModule} from "../shared-member/shared-member.module";
import {FooterComponent} from "./footer/footer.component";
import {TopbarComponent} from "./topbar/topbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports: [
    TopbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    SharedMemberModule
  ]
})
export class LayoutsModule { }
