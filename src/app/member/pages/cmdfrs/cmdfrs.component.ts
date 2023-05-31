import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouveauFournisseurComponent} from "./nouveau-fournisseur/nouveau-fournisseur.component";
import {DetailCmfrsComponent} from "./detail-cmfrs/detail-cmfrs.component";

@Component({
  selector: 'app-cmdfrs',
  templateUrl: './cmdfrs.component.html',
  styleUrls: ['./cmdfrs.component.scss']
})
export class CmdfrsComponent {


  constructor(
    private ngbModal: NgbModal,
  ) {}


  openModal(): void {
    const modalRef = this.ngbModal.open(NouveauFournisseurComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-commandesfournisseurs' === res) {

      }
    })
  }

  openModalDetail(): void {
    const modalRef = this.ngbModal.open(DetailCmfrsComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-commandesfournisseurs' === res) {

      }
    })
  }

}
