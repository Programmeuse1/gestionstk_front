import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";
import {CoreModule} from "./core/core.module";
import {DateFormatPipe} from "./shared/pipe/DateFormatPipe";
import {DateFormatUpdatePipe} from "./shared/pipe/DateFormatUpdatePipe";
import {DateHourFormatPipe} from "./shared/pipe/DateHourFormatPipe";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    DateFormatPipe,
    DateFormatUpdatePipe,
    DateHourFormatPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
