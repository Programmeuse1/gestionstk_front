import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent  {

  constructor(
    private activeModal: NgbActiveModal,
  ) {}

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
