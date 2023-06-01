import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {ClientService} from "../service/client.service";
import {Adresse} from "../../../../../gs-api/src/models/adresse";

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
    id: [null],
    nom: [null],
    numTel: [null],
    prenom: [null],
  });

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
