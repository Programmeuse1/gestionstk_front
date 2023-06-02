/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleDto } from '../models/article-dto';
import { ArticleCriteria } from '../models/article-criteria';
@Injectable({
  providedIn: 'root',
})
class ArticlesApiService extends __BaseService {
  static readonly findAllPath = '/gestiondestock_backend/v1/article/all';
  static readonly findByCodePath = '/gestiondestock_backend/v1/article/code/{codeArticle}';
  static readonly savePath = '/gestiondestock_backend/v1/article/create';
  static readonly deletePath = '/gestiondestock_backend/v1/article/delete/{idArticle}';
  static readonly findByIdPath = '/gestiondestock_backend/v1/article/id/{idArticle}';
  static readonly listingArticlePath = '/gestiondestock_backend/v1/article/listingArticle';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des articles
   *
   * Cette methode permet de chercher et de renvoyer la liste des article qui existentdans la BD
   * @return La liste des articles/ une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/article/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des articles
   *
   * Cette methode permet de chercher et de renvoyer la liste des article qui existentdans la BD
   * @return La liste des articles/ une liste vide
   */
  findAll(): __Observable<Array<ArticleDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * Recherche d'un article par CODE
   *
   * Cette methode permet de chercher un article par son CODE
   * @param codeArticle undefined
   * @return L'article a ete trouve dans la BD
   */
  findByCodeResponse(codeArticle: string): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/article/code/${encodeURIComponent(String(codeArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Recherche d'un article par CODE
   *
   * Cette methode permet de chercher un article par son CODE
   * @param codeArticle undefined
   * @return L'article a ete trouve dans la BD
   */
  findByCode(codeArticle: string): __Observable<ArticleDto> {
    return this.findByCodeResponse(codeArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Enregistrer un article
   *
   * Cette methode permet d'enregistrer ou modifier un article
   * @param body undefined
   * @return L'objet article a ete cree/modifier
   */
  saveResponse(body?: ArticleDto): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock_backend/v1/article/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Enregistrer un article
   *
   * Cette methode permet d'enregistrer ou modifier un article
   * @param body undefined
   * @return L'objet article a ete cree/modifier
   */
  save(body?: ArticleDto): __Observable<ArticleDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Supprimer un article
   *
   * Cette methode permet de supprimer un article par son ID
   * @param idArticle undefined
   * @return L'article a ete supprime
   */
  deleteResponse(idArticle: number): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock_backend/v1/article/delete/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Supprimer un article
   *
   * Cette methode permet de supprimer un article par son ID
   * @param idArticle undefined
   * @return L'article a ete supprime
   */
  delete(idArticle: number): __Observable<ArticleDto> {
    return this.deleteResponse(idArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Recherche d'un article par l'ID
   *
   * Cette methode permet de chercher un article par son ID
   * @param idArticle undefined
   * @return L'article a ete trouve dans la BD
   */
  findByIdResponse(idArticle: number): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/article/id/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Recherche d'un article par l'ID
   *
   * Cette methode permet de chercher un article par son ID
   * @param idArticle undefined
   * @return L'article a ete trouve dans la BD
   */
  findById(idArticle: number): __Observable<ArticleDto> {
    return this.findByIdResponse(idArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Renvoi la liste des articles en fonction des critères de recherche
   *
   * Cette methode permet de chercher et de renvoyer la liste des article qui existentdans la BD
   * @param body undefined
   * @return La liste des articles/ une liste vide
   */
  listingArticleResponse(body?: ArticleCriteria): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock_backend/v1/article/listingArticle`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des articles en fonction des critères de recherche
   *
   * Cette methode permet de chercher et de renvoyer la liste des article qui existentdans la BD
   * @param body undefined
   * @return La liste des articles/ une liste vide
   */
  listingArticle(body?: ArticleCriteria): __Observable<Array<ArticleDto>> {
    return this.listingArticleResponse(body).pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }
}

module ArticlesApiService {
}

export { ArticlesApiService }
