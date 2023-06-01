import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouveauFournisseurComponent} from "./nouveau-fournisseur/nouveau-fournisseur.component";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.scss']
})
export class FournisseursComponent {

  searchForm = this.fb.group({
    nom: [],
    /*numeroCni: [],
    email: [],
    telephone: [],
    adresse: [],*/
    itemsPerPage: [10],
  });

  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder
  ) {}

  openModal(): void {
    const modalRef = this.ngbModal.open(NouveauFournisseurComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-fournisseurs' === res) {

      }
    })
  }

  findAll(){

  }
}
