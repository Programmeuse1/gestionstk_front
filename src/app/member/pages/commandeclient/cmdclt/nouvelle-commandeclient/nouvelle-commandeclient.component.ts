import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, Validators} from "@angular/forms";
import {ClientService} from "../../../client/service/client.service";

@Component({
  selector: 'app-nouvelle-commandeclient',
  templateUrl: './nouvelle-commandeclient.component.html',
  styleUrls: ['./nouvelle-commandeclient.component.scss']
})
export class NouvelleCommandeclientComponent {

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private clientService: ClientService
  ) {}

  commandeClientForm = this.fb.group({
    code: [null],
    etatCommande: [null],
    client: [0,Validators.required],

  });

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
