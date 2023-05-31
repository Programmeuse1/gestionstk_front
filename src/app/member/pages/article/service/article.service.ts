import {Injectable} from '@angular/core';
import {ArticlesApiService} from "../../../../../gs-api/src/services/articles-api.service";

import {ArticleDto} from "../../../../../gs-api/src/models/article-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private articles: ArticlesApiService
  ) { }

  savearticle(articleDto: ArticleDto): Observable<ArticleDto> {
    return this.articles.save(articleDto);

  }


  findArticleById(idArticle: number): Observable<ArticleDto> {
    return this.articles.findById(idArticle);

  }

  findArticleByCode(codeArticle: string): Observable<ArticleDto> {
    return this.articles.findByCode(codeArticle);

  }

  findArticleAll(): Observable<Array<ArticleDto>> {
    return this.articles.findAll();

  }

  deleteArticle(idArticle: number): Observable<ArticleDto> {
    return this.articles.delete(idArticle);

  }
}
