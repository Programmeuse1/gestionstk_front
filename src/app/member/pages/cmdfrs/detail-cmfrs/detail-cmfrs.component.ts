import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-detail-cmfrs',
  templateUrl: './detail-cmfrs.component.html',
  styleUrls: ['./detail-cmfrs.component.scss']
})
export class DetailCmfrsComponent {

  constructor(
    private activeModal: NgbActiveModal,
  ) {}

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
