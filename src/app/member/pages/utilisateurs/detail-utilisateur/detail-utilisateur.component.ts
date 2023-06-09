import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {UtilisateurDto} from "../../../../../gs-api/src/models/utilisateur-dto";

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.scss']
})
export class DetailUtilisateurComponent  {

  utilisateurDto: UtilisateurDto = {};

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  cancle(): void {
    this.activeModal.dismiss('cancel');
  }

}
