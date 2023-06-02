import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, Validators} from "@angular/forms";
import {FournisseursService} from "../service/fournisseurs.service";
import {FournisseurDto} from "../../../../../gs-api/src/models/fournisseur-dto";

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

  fournisseurForm = this.fb.group({
    id: [null],
    nom: [null],
    numTel: [null],
    prenom: [null],
    mail: [null],
    // commandeFournisseurs: [null, [Validators.required]],
  });

  saveValue(): FournisseurDto {
    // this.commandeFournisseurs = {
    //   id: this.fournisseurForm?.get('commandeFournisseurs')?.value ?? undefined
    // };
    return {
      // commandeFournisseurs: this.commandeFournisseurs,
      nom: this.fournisseurForm?.get('nom')?.value ?? '',
      numTel: this.fournisseurForm?.get('numTel')?.value ?? '',
      prenom: this.fournisseurForm?.get('prenom')?.value ?? '',
      mail: this.fournisseurForm?.get('mail')?.value ?? '',
    }
  }

  saveFournisseur():void{
    this.fournisseurService.saveFournisseur(this.saveValue()).subscribe({
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
