import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouvelleCommandeclientComponent} from "./nouvelle-commandeclient/nouvelle-commandeclient.component";
import {DetailCmdcltComponent} from "./detail-cmdclt/detail-cmdclt.component";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-cmdclt',
  templateUrl: './cmdclt.component.html',
  styleUrls: ['./cmdclt.component.scss']
})
export class CmdcltComponent {

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
    private fb:FormBuilder
  ) {}

  openModal(): void {
    const modalRef = this.ngbModal.open(NouvelleCommandeclientComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-commandesclients' === res) {

      }
    })
  }

  openModalDetaille(): void {
    const modalRef = this.ngbModal.open(DetailCmdcltComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-commandesclients' === res) {

      }
    })
  }

  findAll(){

  }
}
