import { NgModule } from '@angular/core';

import { ArticleRoutingModule } from './article-routing.module';
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import {ArticleComponent} from "./article.component";
import {NouvelArticleComponent} from "./nouvel-article/nouvel-article.component";
import { DeleteArticleComponent } from './delete-article/delete-article.component';
import {DetailArticleComponent} from "./detail-article/detail-article.component";


@NgModule({
  declarations: [
    ArticleComponent,
    NouvelArticleComponent,
    DeleteArticleComponent,
    DetailArticleComponent
  ],
  imports: [
    SharedMemberModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
