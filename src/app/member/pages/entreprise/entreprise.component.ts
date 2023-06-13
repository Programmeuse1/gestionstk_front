import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {NouvelleVenteComponent} from "../vente/nouvelle-vente/nouvelle-vente.component";
import {NouvelleEntrepriseComponent} from "./nouvelle-entreprise/nouvelle-entreprise.component";

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {

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
    const modalRef = this.ngbModal.open(NouvelleEntrepriseComponent, {size: 'lg', backdrop: 'static', animation: true});
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
