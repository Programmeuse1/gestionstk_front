import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouveauClientComponent} from "./nouveau-client/nouveau-client.component";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {


  constructor(
    private ngbModal: NgbModal,
  ) {}

  openModal(): void {
    const modalRef = this.ngbModal.open(NouveauClientComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-client' === res) {

      }
    })
  }
}
