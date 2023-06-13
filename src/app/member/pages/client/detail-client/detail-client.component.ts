import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ClientDto} from "../../../../../gs-api/src/models/client-dto";

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent {

  clientDto: ClientDto = {};

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  cancle(): void {
    this.activeModal.dismiss('cancel');
  }

}
