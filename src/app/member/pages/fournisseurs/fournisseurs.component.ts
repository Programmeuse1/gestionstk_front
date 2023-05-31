import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouveauFournisseurComponent} from "./nouveau-fournisseur/nouveau-fournisseur.component";

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.scss']
})
export class FournisseursComponent {


  constructor(
    private ngbModal: NgbModal,
  ) {}

  openModal(): void {
    const modalRef = this.ngbModal.open(NouveauFournisseurComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-fournisseurs' === res) {

      }
    })
  }
}
