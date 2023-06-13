import {Component, OnInit} from '@angular/core';

import {NouvelleCategorieComponent} from "./nouvelle-categorie/nouvelle-categorie.component";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {CategorieService} from "./service/categorie.service";
import {CategoryDto} from "../../../../gs-api/src/models/category-dto";
import {FormBuilder} from "@angular/forms";
import {ArticleDto} from "../../../../gs-api/src/models/article-dto";
import {DeleteArticleComponent} from "../article/delete-article/delete-article.component";
import {DeleteCategorieComponent} from "./delete-categorie/delete-categorie.component";
import {DetailArticleComponent} from "../article/detail-article/detail-article.component";
import {DetailCategorieComponent} from "./detail-categorie/detail-categorie.component";

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

  detailCategory(categoryDto: CategoryDto) {
    const modalRef = this.ngbModal.open(DetailCategorieComponent, {size: 'lg'});
    this.closeModal(modalRef, categoryDto);
  }

  deleteCategorie(categoryDto: CategoryDto) {
    const modalRef = this.ngbModal.open(DeleteCategorieComponent, {size: 'md'});
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
