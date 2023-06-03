import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {NouvelArticleComponent} from "./nouvel-article/nouvel-article.component";
import {FormBuilder} from "@angular/forms";
import {ArticleService} from "./service/article.service";
import {response} from "express";
import {ArticleDto} from "../../../../gs-api/src/models/article-dto";
import {DeleteArticleComponent} from "./delete-article/delete-article.component";
import {DetailArticleComponent} from "./detail-article/detail-article.component";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{

  articleList: ArticleDto [] = [];
  searchForm = this.fb.group({
    designation: [],
    code: [],
    actif: [],
    nombreDeResultat: ["10"],
    type_order: ['id'],
  });


  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  openModal(): void {
    const modalRef = this.ngbModal.open(NouvelArticleComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.findAll();
      }
    })
  }

  findAll() {
    this.articleService.listingArtcile({
      designation: this.searchForm.value.designation ?? undefined,
      code: this.searchForm.value.code ?? undefined,
      actif: this.searchForm.value.actif ?? undefined,
      nombreDeResultat: this.searchForm.value.nombreDeResultat ?? "10"
      }
    ).subscribe({
      next: response =>{
        this.articleList = response;
      },
      error: err => console.log(err)
    })
  }

  updateArticle(articleDto: ArticleDto) {
    const modalRef = this.ngbModal.open(NouvelArticleComponent, {size: 'md'});
    this.closeModal(modalRef, articleDto);
  }

  detailsArticle(articleDto: ArticleDto) {
    const modalRef = this.ngbModal.open(DetailArticleComponent, {size: 'lg'});
    this.closeModal(modalRef, articleDto);
  }

  deleteArticle(articleDto: ArticleDto) {
    const modalRef = this.ngbModal.open(DeleteArticleComponent, {size: 'md'});
    this.closeModal(modalRef, articleDto);
  }

  closeModal(modalRef: NgbModalRef, articleDto: ArticleDto): void{
    modalRef.componentInstance.articleDto = articleDto;
    modalRef.closed.subscribe((res) => {
      if ('success' === res){
        this.findAll();
      }
    });
  }
}
