import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DateHourFormatPipe} from "./pipe/DateHourFormatPipe";
import {DateFormatUpdatePipe} from "./pipe/DateFormatUpdatePipe";
import {DateFormatPipe} from "./pipe/DateFormatPipe";
import {MyDatePipe} from "./pipe/myDatePipe.pipe";
import {NgSelectModule} from "@ng-select/ng-select";



@NgModule({
  declarations: [
    MyDatePipe,
    DateFormatPipe,
    DateFormatUpdatePipe,
    DateHourFormatPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    MyDatePipe,
    NgSelectModule,
    DateFormatPipe,
    DateFormatUpdatePipe,
    DateHourFormatPipe,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
