import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouvelleCommandeclientComponent} from "./nouvelle-commandeclient/nouvelle-commandeclient.component";
import {DetailCmdcltComponent} from "./detail-cmdclt/detail-cmdclt.component";

@Component({
  selector: 'app-cmdclt',
  templateUrl: './cmdclt.component.html',
  styleUrls: ['./cmdclt.component.scss']
})
export class CmdcltComponent {


  constructor(
    private ngbModal: NgbModal,
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
}
