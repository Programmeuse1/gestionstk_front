import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {ClientComponent} from "./client.component";
import {NouveauClientComponent} from "./nouveau-client/nouveau-client.component";
import {DeleteClientComponent} from "./delete-client/delete-client.component";
import {DetailClientComponent} from "./detail-client/detail-client.component";


@NgModule({
  declarations: [
    ClientComponent,
    NouveauClientComponent,
    DeleteClientComponent,
    DetailClientComponent
  ],
  imports: [
    SharedMemberModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
