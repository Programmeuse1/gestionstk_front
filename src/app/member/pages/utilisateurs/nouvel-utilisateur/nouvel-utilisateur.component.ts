import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {UtilisateursService} from "../service/utilisateurs.service";
import {UtilisateurDto} from "../../../../../gs-api/src/models/utilisateur-dto";

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.scss']
})
export class NouvelUtilisateurComponent {

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private utilisateurService: UtilisateursService
  ) {}

  utilisateurForm = this.fb.group({
    email:  [null],
    motDePasse:  [null],
    nom:  [null],
    numTel:  [null],
    prenom:  [null]
  });

  saveValue(): UtilisateurDto {
    return {
      email: this.utilisateurForm?.get('email')?.value ?? '',
      motDePasse: this.utilisateurForm?.get('motDePasse')?.value ?? '',
      nom: this.utilisateurForm?.get('nom')?.value ?? '',
      numTel: this.utilisateurForm?.get('numTel')?.value ?? '',
      prenom: this.utilisateurForm?.get('prenom')?.value ?? '',
    }
  }

  saveUtilisateur():void{
    this.utilisateurService.saveUtilisateur(this.saveValue()).subscribe({
      next: (res) => {
        console.log(res);
        this.cancel();
      },
      error: error =>{
      }
    })
  }

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
