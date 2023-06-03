import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, Validators} from "@angular/forms";
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
  articleDto: ArticleDto = {};

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private articlesService: ArticleService,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {
    this.getCategoryList();
    this.updateForm(this.articleDto);
  }

  updateForm(article: ArticleDto): void{
    console.log(article);
    this.articlesForm.patchValue({
      // codearticle: article.code,
      designation: article.designation,
      prixunitairettc: article.prixUnitaireTtc,
      prixUnitaireHt: article.prixUnitaireHt,
      tauxtva: article.tauxTva,
      categorie: article.category?.id ?? undefined,
      actif: article?.actif ?? true
    });
  }

  articlesForm = this.fb.group({
    // codearticle: ["", Validators.required],
    designation: ["", Validators.required],
    prixunitairettc: [0],
    prixUnitaireHt: [0],
    categorie: [0,Validators.required],
    actif: [true],
    tauxtva: [0]
  });

  saveValue(): ArticleDto {
    this.category = {
      id: this.articlesForm?.get('categorie')?.value ?? undefined
    };
    return {
      ...this.articleDto,
      category: this.category,
      actif: this.articlesForm?.get('actif')?.value ?? true,
      designation: this.articlesForm?.get('designation')?.value ?? '',
      prixUnitaireHt: this.articlesForm?.get('prixUnitaireHt')?.value ?? undefined,
      prixUnitaireTtc: this.articlesForm?.get('prixunitairettc')?.value ?? undefined,
      tauxTva: this.articlesForm?.get('tauxtva')?.value ?? undefined
    }
  }

  saveArticle():void{
    this.articlesService.savearticle(this.saveValue()).subscribe({
      next: (res) => {
        console.log(res);
        this.activeModal.close('success');
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
