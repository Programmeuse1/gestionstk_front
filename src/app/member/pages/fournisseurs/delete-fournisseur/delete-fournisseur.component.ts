import { Component, OnInit } from '@angular/core';
import {ArticleDto} from "../../../../../gs-api/src/models/article-dto";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ArticleService} from "../../article/service/article.service";
import {FournisseurDto} from "../../../../../gs-api/src/models/fournisseur-dto";
import {FournisseursService} from "../service/fournisseurs.service";

@Component({
  selector: 'app-delete-fournisseur',
  templateUrl: './delete-fournisseur.component.html',
  styleUrls: ['./delete-fournisseur.component.scss']
})
export class DeleteFournisseurComponent implements OnInit {

  fournisseurDto: FournisseurDto = {};

  constructor(private activeModal: NgbActiveModal,
              private fournisseursService: FournisseursService,
              /* private toastr: ToastrService*/) { }

  ngOnInit(): void {
  }

  onDeleteFournisseur(id: any) {
    this.fournisseursService.deleteFournisseur(id).subscribe({
      next: response =>{
        this.activeModal.close('success');
        this.cancel();
      }, error: error =>{
        //this.toastr.error(error.message);
        this.cancel();
      }
    })
  }

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
