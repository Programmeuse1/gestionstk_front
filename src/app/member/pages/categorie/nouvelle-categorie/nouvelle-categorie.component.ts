import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {CategorieService} from "../service/categorie.service";
import {FormBuilder} from "@angular/forms";
import {ArticleDto} from "../../../../../gs-api/src/models/article-dto";

@Component({
  selector: 'app-nouvelle-categorie',
  templateUrl: './nouvelle-categorie.component.html',
  styleUrls: ['./nouvelle-categorie.component.scss']
})
export class NouvelleCategorieComponent {

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private categorieService: CategorieService
  ) {}

  categorieForm = this.fb.group({
    code: [null],
    designation: [null],
  });

  saveValue(): ArticleDto {
    return {
      code: this.categorieForm?.get('code')?.value ?? '',
      designation: this.categorieForm?.get('designation')?.value ?? '',
    }
  }

  saveCategory():void{
    this.categorieService.saveCategory(this.saveValue()).subscribe({
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
