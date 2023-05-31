import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports:[
    SharedModule,
    RouterModule
  ]
})
export class SharedMemberModule {

}
