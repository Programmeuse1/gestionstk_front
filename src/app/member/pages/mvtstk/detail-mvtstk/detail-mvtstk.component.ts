import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-detail-mvtstk',
  templateUrl: './detail-mvtstk.component.html',
  styleUrls: ['./detail-mvtstk.component.scss']
})
export class DetailMvtstkComponent {

  constructor(
    private activeModal: NgbActiveModal,
  ) {}

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }
}
