import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, Validators} from "@angular/forms";
import {UtilisateursService} from "../service/utilisateurs.service";
import {UtilisateurDto} from "../../../../../gs-api/src/models/utilisateur-dto";
import {FournisseurDto} from "../../../../../gs-api/src/models/fournisseur-dto";

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.scss']
})
export class NouvelUtilisateurComponent {

  isSaving = false;

  utilisateurDto: UtilisateurDto = {};

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private utilisateurService: UtilisateursService
  ) {}

  ngOnInit(): void {
    this.updateForm(this.utilisateurDto);
  }

  updateForm(utilisateur: UtilisateurDto): void{
    console.log(utilisateur);
    this.utilisateurForm.patchValue({
      // codearticle: article.code,
      nom: utilisateur.nom,
      prenom: utilisateur.prenom,
      numTel: utilisateur.numTel,
      email: utilisateur.email,
      motDePasse: utilisateur.motDePasse,
      actif: utilisateur?.actif ?? true
    });
  }

  utilisateurForm = this.fb.group({
    nom: ["", Validators.required],
    numTel: ["", Validators.required],
    prenom: ["", Validators.required],
    email: ["", Validators.required],
    motDePasse: ["", Validators.required],
    actif: [true],
  });

  saveValue(): UtilisateurDto {
    return {
      ...this.utilisateurDto,
      actif: this.utilisateurForm?.get('actif')?.value ?? true,
      email: this.utilisateurForm?.get('email')?.value ?? '',
      motDePasse: this.utilisateurForm?.get('motDePasse')?.value ?? '',
      nom: this.utilisateurForm?.get('nom')?.value ?? '',
      numTel: this.utilisateurForm?.get('numTel')?.value ?? '',
      prenom: this.utilisateurForm?.get('prenom')?.value ?? '',
    }
  }

  saveUtilisateur():void{
    console.log(this.saveValue());
    this.utilisateurService.saveUtilisateur(this.saveValue()).subscribe({
      next: (res) => {
        console.log(res);
        this.activeModal.close('success');
        this.cancel();
        this.isSaving = false;
      },
      error: error =>{
        this.isSaving = false;
      }
    })
  }

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
