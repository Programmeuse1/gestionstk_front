import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, Validators} from "@angular/forms";
import {CmdfrsService} from "../service/cmdfrs.service";
import {ArticleDto} from "../../../../../gs-api/src/models/article-dto";
import {CommandeFournisseurDto} from "../../../../../gs-api/src/models/commande-fournisseur-dto";
import {FournisseursService} from "../../fournisseurs/service/fournisseurs.service";
import {CategoryDto} from "../../../../../gs-api/src/models/category-dto";
import {FournisseurDto} from "../../../../../gs-api/src/models/fournisseur-dto";

@Component({
  selector: 'app-nouveau-fournisseur',
  templateUrl: './nouveau-fournisseur.component.html',
  styleUrls: ['./nouveau-fournisseur.component.scss']
})
export class NouveauFournisseurComponent {

  fournisseur: FournisseurDto = {};

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private commandeFournisseursService: CmdfrsService,
    private fournisseurService: FournisseursService
  ) {}

  commandeFournisseurForm = this.fb.group({
    code: [null],
    etatCommande: [null],
    fournisseur: [null, [Validators.required]],
  });

  saveValue(): CommandeFournisseurDto {
    this.fournisseur = {
      id: this.commandeFournisseurForm?.get('fournisseur')?.value ?? undefined
    };
    return {
      fournisseur: this.fournisseur,
      code: this.commandeFournisseurForm?.get('code')?.value ?? '',
      // etatCommande: this.commandeFournisseurForm?.get('etatCommande')?.value ?? '',
    }
  }

  saveCommandeFournisseur():void{
    this.commandeFournisseursService.saveCmdfrs(this.saveValue()).subscribe({
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
