import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {NouvelleVenteComponent} from "./nouvelle-vente/nouvelle-vente.component";

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent implements OnInit {

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
  ) { }

  openModal(): void {
    const modalRef = this.ngbModal.open(NouvelleVenteComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-vente' === res) {

      }
    })
  }

  ngOnInit(): void {
  }

  findAll(){

  }

}
