import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {VenteService} from "../service/vente.service";
import {UtilisateurDto} from "../../../../../gs-api/src/models/utilisateur-dto";
import {VentesDto} from "../../../../../gs-api/src/models/ventes-dto";

@Component({
  selector: 'app-nouvelle-vente',
  templateUrl: './nouvelle-vente.component.html',
  styleUrls: ['./nouvelle-vente.component.scss']
})
export class NouvelleVenteComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private ventesService: VenteService
  ) {}

  utilisateurForm = this.fb.group({
    email:  [null],
    motDePasse:  [null],
    nom:  [null],
    numTel:  [null],
    prenom:  [null]
  });

  // saveValue(): VentesDto {
  //   return {
  //     email: this.utilisateurForm?.get('email')?.value ?? '',
  //     motDePasse: this.utilisateurForm?.get('motDePasse')?.value ?? '',
  //     nom: this.utilisateurForm?.get('nom')?.value ?? '',
  //     numTel: this.utilisateurForm?.get('numTel')?.value ?? '',
  //     prenom: this.utilisateurForm?.get('prenom')?.value ?? '',
  //   }
  // }

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

  ngOnInit(): void {
  }

}
