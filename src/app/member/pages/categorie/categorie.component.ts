import {Component, OnInit} from '@angular/core';

import {NouvelleCategorieComponent} from "./nouvelle-categorie/nouvelle-categorie.component";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {CategorieService} from "./service/categorie.service";
import {CategoryDto} from "../../../../gs-api/src/models/category-dto";
import {FormBuilder} from "@angular/forms";
import {FournisseurDto} from "../../../../gs-api/src/models/fournisseur-dto";
import {NouveauFournisseurComponent} from "../fournisseurs/nouveau-fournisseur/nouveau-fournisseur.component";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit{

  categoryList: CategoryDto [] = [];

  searchForm = this.fb.group({
    designation: [],
    code: [],
    actif: [],
    nombreDeResultat: ["10"],
  });


  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void{
    this.findAll();
  }

  findAll() {
    this.categorieService.listingCategory({
        designation: this.searchForm.value.designation ?? undefined,
        code: this.searchForm.value.code ?? undefined,
        actif: this.searchForm.value.actif ?? undefined,
        nombreDeResultat: this.searchForm.value.nombreDeResultat ?? "10"
      }
    ).subscribe({
      next: response =>{
        this.categoryList = response;
      },
      error: err => console.log(err)
    })
  }


  openModal(): void {
    const modalRef = this.ngbModal.open(NouvelleCategorieComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.findAll();
      }
    })
  }

  updateCategory(categoryDto: CategoryDto) {
    console.log(categoryDto);
    const modalRef = this.ngbModal.open(NouvelleCategorieComponent, {size: 'md'});
    this.closeModal(modalRef, categoryDto);
  }

  closeModal(modalRef: NgbModalRef, categoryDto: CategoryDto): void{
    modalRef.componentInstance.categoryDto = categoryDto;
    modalRef.closed.subscribe((res) => {
      if ('success' === res){
        this.findAll();
      }
    });
  }




}
