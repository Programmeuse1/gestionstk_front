import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {CategorieService} from "../service/categorie.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ArticleDto} from "../../../../../gs-api/src/models/article-dto";
import {FournisseurDto} from "../../../../../gs-api/src/models/fournisseur-dto";
import {CategoryDto} from "../../../../../gs-api/src/models/category-dto";

@Component({
  selector: 'app-nouvelle-categorie',
  templateUrl: './nouvelle-categorie.component.html',
  styleUrls: ['./nouvelle-categorie.component.scss']
})
export class NouvelleCategorieComponent {

  isSaving = false;

  categoryDto: CategoryDto = {};

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {
    this.updateForm(this.categoryDto);
  }

  updateForm(category: CategoryDto): void{
    console.log(category);
    this.categorieForm.patchValue({
      // codearticle: article.code,
      designation: category.designation,
      actif: category?.actif ?? true
    });
  }

  categorieForm = this.fb.group({
    designation: ["", Validators.required],
    actif: [true],
  });

  saveValue(): ArticleDto {
    return {
      ...this.categoryDto,
      actif: this.categorieForm?.get('actif')?.value ?? true,
      designation: this.categorieForm?.get('designation')?.value ?? '',
    }
  }

  saveCategory():void{
    this.categorieService.saveCategory(this.saveValue()).subscribe({
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
