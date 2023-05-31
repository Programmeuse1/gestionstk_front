import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-nouvelle-commandeclient',
  templateUrl: './nouvelle-commandeclient.component.html',
  styleUrls: ['./nouvelle-commandeclient.component.scss']
})
export class NouvelleCommandeclientComponent {

  constructor(
    private activeModal: NgbActiveModal,
  ) {}

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
