import { Injectable } from '@angular/core';
import {CategoriesApiService} from "../../../../../gs-api/src/services/categories-api.service";
import {Observable} from "rxjs";
import {CategoryDto} from "../../../../../gs-api/src/models/category-dto";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(
    private categorie: CategoriesApiService
  ) { }

  saveCategory(categoryDto: CategoryDto): Observable<CategoryDto> {
    return this.categorie.save(categoryDto);

  }


  findCategoryById(idCategory: number): Observable<CategoryDto> {
    return this.categorie.findById(idCategory);

  }

  findCategoryByCode(codeCategory: string): Observable<CategoryDto> {
    return this.categorie.findByCode(codeCategory);

  }

  findCategoryAll(): Observable<Array<CategoryDto>> {
    return this.categorie.findAll();

  }

  deleteCategorie(idCategory: number): Observable<CategoryDto> {
    return this.categorie.delete(idCategory);

  }
}
