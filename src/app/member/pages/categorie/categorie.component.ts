import {Component, OnInit} from '@angular/core';

import {NouvelleCategorieComponent} from "./nouvelle-categorie/nouvelle-categorie.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CategorieService} from "./service/categorie.service";
import {CategoryDto} from "../../../../gs-api/src/models/category-dto";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit{

  searchForm = this.fb.group({
    nom: [],
    /*numeroCni: [],
    email: [],
    telephone: [],
    adresse: [],*/
    itemsPerPage: [10],
  });

  categoryList: Array<CategoryDto> = [];

  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private categorieService: CategorieService
  ) {}

  openModal(): void {
    const modalRef = this.ngbModal.open(NouvelleCategorieComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-categories' === res) {

      }
    })
  }

  ngOnInit(): void{
    this.getCategoryList();
  }

  getCategoryList(){
    this.categorieService.findCategoryAll().subscribe({
      next: value =>{
        console.log(value)
        this.categoryList = value;
      },
      error: error => {

      }
    });
  }

  findAll() {

  }
}
