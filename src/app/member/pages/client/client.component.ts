import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouveauClientComponent} from "./nouveau-client/nouveau-client.component";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

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
    private fb: FormBuilder,
  ) {}

  openModal(): void {
    const modalRef = this.ngbModal.open(NouveauClientComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-client' === res) {

      }
    })
  }

  findAll() {

  }
}
