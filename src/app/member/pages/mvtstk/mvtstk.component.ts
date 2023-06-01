import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DetailMvtstkComponent} from "./detail-mvtstk/detail-mvtstk.component";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-mvtstk',
  templateUrl: './mvtstk.component.html',
  styleUrls: ['./mvtstk.component.scss']
})
export class MvtstkComponent {

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


  openModalCorrection(): void {
    const modalRef = this.ngbModal.open(DetailMvtstkComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-commandesfournisseurs' === res) {

      }
    })
  }

  findAll(){

  }
}
