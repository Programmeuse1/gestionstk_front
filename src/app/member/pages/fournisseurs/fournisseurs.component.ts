import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {NouveauFournisseurComponent} from "./nouveau-fournisseur/nouveau-fournisseur.component";
import {FormBuilder} from "@angular/forms";
import {FournisseurDto} from "../../../../gs-api/src/models/fournisseur-dto";
import {FournisseursService} from "./service/fournisseurs.service";
import {ArticleDto} from "../../../../gs-api/src/models/article-dto";
import {DeleteArticleComponent} from "../article/delete-article/delete-article.component";
import {DeleteFournisseurComponent} from "./delete-fournisseur/delete-fournisseur.component";
import {ClientDto} from "../../../../gs-api/src/models/client-dto";
import {DetailClientComponent} from "../client/detail-client/detail-client.component";
import {DetailFournisseurComponent} from "./detail-fournisseur/detail-fournisseur.component";

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.scss']
})
export class FournisseursComponent implements OnInit{

  fournisseurList: FournisseurDto [] = [];

  searchForm = this.fb.group({
    nom: [],
    code: [],
    actif: [],
    nombreDeResultat: ["10"],
  });


  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private fournisseurService: FournisseursService
  ) {}

  ngOnInit(): void{
    this.findAll();
  }

  findAll() {
    this.fournisseurService.listingFournisseur({
        nom: this.searchForm.value.nom ?? undefined,
        code: this.searchForm.value.code ?? undefined,
        actif: this.searchForm.value.actif ?? undefined,
        nombreDeResultat: this.searchForm.value.nombreDeResultat ?? "10"
      }
    ).subscribe({
      next: response =>{
        this.fournisseurList = response;
      },
      error: err => console.log(err)
    })
  }


  openModal(): void {
    const modalRef = this.ngbModal.open(NouveauFournisseurComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.findAll();

      }
    })
  }

  detailFournisseur(fournisseurDto: FournisseurDto) {
    const modalRef = this.ngbModal.open(DetailFournisseurComponent, {size: 'lg'});
    this.closeModal(modalRef, fournisseurDto);
  }

  deleteFournisseur(fournisseurDto: FournisseurDto) {
    const modalRef = this.ngbModal.open(DeleteFournisseurComponent, {size: 'md'});
    this.closeModal(modalRef, fournisseurDto);
  }

  updateFournisseur(fournisseurDto: FournisseurDto) {
    console.log(fournisseurDto);
    const modalRef = this.ngbModal.open(NouveauFournisseurComponent, {size: 'md'});
    this.closeModal(modalRef, fournisseurDto);
  }

  closeModal(modalRef: NgbModalRef, fournisseurDto: FournisseurDto): void{
    modalRef.componentInstance.fournisseurDto = fournisseurDto;
    modalRef.closed.subscribe((res) => {
      if ('success' === res){
        this.findAll();
      }
    });
  }

}
