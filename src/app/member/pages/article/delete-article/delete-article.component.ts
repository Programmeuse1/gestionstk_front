import { Component, OnInit } from '@angular/core';
import {ArticleDto} from "../../../../../gs-api/src/models/article-dto";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ArticleService} from "../service/article.service";

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.scss']
})
export class DeleteArticleComponent implements OnInit {

  articleDto: ArticleDto = {};

  constructor(private activeModal: NgbActiveModal,
              private articleService: ArticleService,
             /* private toastr: ToastrService*/) { }

  ngOnInit(): void {
  }

  onDeleteArticle(id: any) {
    this.articleService.deleteArticle(id).subscribe({
      next: response =>{
        this.activeModal.close('success');
        this.cancel();
      }, error: error =>{
        //this.toastr.error(error.message);
        this.cancel();
      }
    })
  }

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }
}
