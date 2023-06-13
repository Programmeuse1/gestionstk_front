import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {CategoryDto} from "../../../../../gs-api/src/models/category-dto";

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.component.html',
  styleUrls: ['./detail-categorie.component.scss']
})
export class DetailCategorieComponent  {

  categoryDto: CategoryDto = {};

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  cancle(): void {
    this.activeModal.dismiss('cancel');
  }

}
