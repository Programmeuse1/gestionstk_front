import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-nouveau-fournisseur',
  templateUrl: './nouveau-fournisseur.component.html',
  styleUrls: ['./nouveau-fournisseur.component.scss']
})
export class NouveauFournisseurComponent {

  constructor(
    private activeModal: NgbActiveModal,
  ) {}

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }
}
