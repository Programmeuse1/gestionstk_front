import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-detail-cmdclt',
  templateUrl: './detail-cmdclt.component.html',
  styleUrls: ['./detail-cmdclt.component.scss']
})
export class DetailCmdcltComponent {
  constructor(
    private activeModal: NgbActiveModal,
  ) {}

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }


}
