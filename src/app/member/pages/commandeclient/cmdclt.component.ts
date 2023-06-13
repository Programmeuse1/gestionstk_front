import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouvelleCommandeclientComponent} from "./nouvelle-commandeclient/nouvelle-commandeclient.component";
import {DetailCmdcltComponent} from "./detail-cmdclt/detail-cmdclt.component";
import {FormBuilder} from "@angular/forms";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-cmdclt',
  templateUrl: './cmdclt.component.html',
  styleUrls: ['./cmdclt.component.scss']
})
export class CmdcltComponent {

  searchForm = this.fb.group({
    nom: [],
    code: [],
    /*numeroCni: [],
    email: [],
    telephone: [],
    adresse: [],*/
    itemsPerPage: [10],
  });

  constructor(
    private ngbModal: NgbModal,
    private fb:FormBuilder,
    private router:Router
  ) {}

  openNouvelleCommandeClient(): void {
    this.router.navigate(['member/commandesclients/nouvelle_commande_client']).then();
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
