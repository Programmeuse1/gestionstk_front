import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {ClientService} from "../service/client.service";

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.scss']
})
export class NouveauClientComponent {

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private clientsService: ClientService
  ) {}

  clientsForm = this.fb.group({
    code: [null],
    designation: [null],
  });

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
