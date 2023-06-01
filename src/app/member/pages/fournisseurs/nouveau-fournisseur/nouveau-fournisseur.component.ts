import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {FournisseursService} from "../service/fournisseurs.service";

@Component({
  selector: 'app-nouveau-fournisseur',
  templateUrl: './nouveau-fournisseur.component.html',
  styleUrls: ['./nouveau-fournisseur.component.scss']
})
export class NouveauFournisseurComponent {

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private fournisseurService: FournisseursService
  ) {}

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
