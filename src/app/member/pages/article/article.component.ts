import { Component } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouvelArticleComponent} from "./nouvel-article/nouvel-article.component";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  searchForm = this.fb.group({
    nom: [],
    /*numeroCni: [],
    email: [],
    telephone: [],
    adresse: [],*/
    itemsPerPage: [10],
  });


  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder,
  ) {}

  openModal(): void {
    const modalRef = this.ngbModal.open(NouvelArticleComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-article' === res) {

      }
    })
  }

  findAll() {
    
  }
}
