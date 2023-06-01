import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenteRoutingModule } from './vente-routing.module';
import {VenteComponent} from "./vente.component";
import {NouvelleVenteComponent} from "./nouvelle-vente/nouvelle-vente.component";


@NgModule({
  declarations: [
    VenteComponent,
    NouvelleVenteComponent
  ],
  imports: [
    CommonModule,
    VenteRoutingModule
  ]
})
export class VenteModule { }
