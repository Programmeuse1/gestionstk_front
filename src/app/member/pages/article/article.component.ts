import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouvelArticleComponent} from "./nouvel-article/nouvel-article.component";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {


  constructor(
    private ngbModal: NgbModal,
  ) {}

  openModal(): void {
    const modalRef = this.ngbModal.open(NouvelArticleComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-article' === res) {

      }
    })
  }

}
