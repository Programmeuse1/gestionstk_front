import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {ClientComponent} from "./client.component";
import {NouveauClientComponent} from "./nouveau-client/nouveau-client.component";


@NgModule({
  declarations: [
    ClientComponent,
    NouveauClientComponent
  ],
  imports: [
    SharedMemberModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
