import { Component } from '@angular/core';
import {ArticleDto} from "../../../../../gs-api/src/models/article-dto";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent {

  articleDto: ArticleDto = {};

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  cancle(): void {
    this.activeModal.dismiss('cancel');
  }
}
