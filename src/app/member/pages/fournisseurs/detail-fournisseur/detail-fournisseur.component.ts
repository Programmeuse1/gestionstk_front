import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FournisseurDto} from "../../../../../gs-api/src/models/fournisseur-dto";

@Component({
  selector: 'app-detail-fournisseur',
  templateUrl: './detail-fournisseur.component.html',
  styleUrls: ['./detail-fournisseur.component.scss']
})
export class DetailFournisseurComponent {

  fournisseurDto: FournisseurDto = {};

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  cancle(): void {
    this.activeModal.dismiss('cancel');
  }

}
