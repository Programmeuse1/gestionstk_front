import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DetailMvtstkComponent} from "./detail-mvtstk/detail-mvtstk.component";

@Component({
  selector: 'app-mvtstk',
  templateUrl: './mvtstk.component.html',
  styleUrls: ['./mvtstk.component.scss']
})
export class MvtstkComponent {

  constructor(
    private ngbModal: NgbModal,
  ) {}


  openModalCorrection(): void {
    const modalRef = this.ngbModal.open(DetailMvtstkComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-commandesfournisseurs' === res) {

      }
    })
  }
}
