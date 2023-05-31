import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {ArticleService} from "../service/article.service";
import {ArticleDto} from "../../../../../gs-api/src/models/article-dto";
import {CategorieService} from "../../categorie/service/categorie.service";
import {CategoryDto} from "../../../../../gs-api/src/models/category-dto";

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit{

  categorieList: Array<CategoryDto> = [];
  category: CategoryDto = {};

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private articlesService: ArticleService,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {
    this.getCategoryList();
  }

  articlesForm = this.fb.group({
    codearticle: [null],
    designation: [null],
    prixunitairettc: [null],
    category: [null],
    tauxtva: [null]
  });

  saveValue(): ArticleDto {
    this.category = {
      id: this.articlesForm?.get('category')?.value ?? undefined
    };
    return {
    category: this.category,
    code: this.articlesForm?.get('codearticle')?.value ?? '',
    designation: this.articlesForm?.get('designation')?.value ?? '',
    prixUnitaireTtc: this.articlesForm?.get('prixunitaireht')?.value ?? undefined,
    tauxTva: this.articlesForm?.get('tauxtva')?.value ?? undefined
    }
  }

  saveArticle():void{
    // console.log(this.saveValue());
    this.articlesService.savearticle(this.saveValue()).subscribe({
      next: (res) => {
        console.log(res);
        this.cancel();
      },
      error: error =>{
      }
    })
  }

  getCategoryList(){
    this.categorieService.findCategoryAll().subscribe({
      next: (res) => {
        this.categorieList = res;
      },
      error: error =>{
      }
    });
  }

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
