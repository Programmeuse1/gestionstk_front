import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DateHourFormatPipe} from "./pipe/DateHourFormatPipe";
import {DateFormatUpdatePipe} from "./pipe/DateFormatUpdatePipe";
import {DateFormatPipe} from "./pipe/DateFormatPipe";
import {MyDatePipe} from "./pipe/myDatePipe.pipe";



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
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    MyDatePipe,
    DateFormatPipe,
    DateFormatUpdatePipe,
    DateHourFormatPipe,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
