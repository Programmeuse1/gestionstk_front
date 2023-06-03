import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, Validators} from "@angular/forms";
import {FournisseursService} from "../service/fournisseurs.service";
import {FournisseurDto} from "../../../../../gs-api/src/models/fournisseur-dto";

@Component({
  selector: 'app-nouveau-fournisseur',
  templateUrl: './nouveau-fournisseur.component.html',
  styleUrls: ['./nouveau-fournisseur.component.scss']
})
export class NouveauFournisseurComponent implements OnInit{

  fournisseurDto: FournisseurDto = {};

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private fournisseurService: FournisseursService
  ) {}

  ngOnInit(): void {
    this.updateForm(this.fournisseurDto);
  }

  updateForm(fournisseur: FournisseurDto): void{
    console.log(fournisseur);
    this.fournisseurForm.patchValue({
      // codearticle: article.code,
      nom: fournisseur.nom,
      prenom: fournisseur.prenom,
      numTel: fournisseur.numTel,
      mail: fournisseur.mail,
      actif: fournisseur?.actif ?? true
    });
  }

  fournisseurForm = this.fb.group({
    nom: ["", Validators.required],
    numTel: ["", Validators.required],
    prenom: ["", Validators.required],
    mail: ["", Validators.required],
    actif: [true],


  });

  saveValue(): FournisseurDto {
    return {
      ...this.fournisseurDto,
      actif: this.fournisseurForm?.get('actif')?.value ?? true,
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
        this.activeModal.close('success');
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
