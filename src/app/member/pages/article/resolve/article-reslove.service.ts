import { Injectable } from '@angular/core';
import {ArticleService} from "../service/article.service";
import {ActivatedRouteSnapshot} from "@angular/router";
import {Observable, mergeMap, of} from "rxjs"
import {ArticleDto} from "../../../../../gs-api/src/models/article-dto";

@Injectable({
  providedIn: 'root'
})
export class ArticleResloveService {

  constructor(
    private articleService: ArticleService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ArticleDto> | Promise<ArticleDto> | ArticleDto {
    const id = route.params['id'] != null ? route.params['id'] : null;
    if(id) {
      return this.articleService.findArticleById(id).pipe(
        mergeMap((article: ArticleDto) => {
          return of(article);
        })
      );
    }
    return of({});
  }
}
