/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryDto } from '../models/category-dto';
@Injectable({
  providedIn: 'root',
})
class CategoriesApiService extends __BaseService {
  static readonly findAllPath = '/gestiondestock_backend/v1/category/all';
  static readonly findByCodePath = '/gestiondestock_backend/v1/category/code/{codeCategory}';
  static readonly savePath = '/gestiondestock_backend/v1/category/create';
  static readonly deletePath = '/gestiondestock_backend/v1/category/delete/{idCategory}';
  static readonly findByIdPath = '/gestiondestock_backend/v1/category/id/{idCategory}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des categories
   *
   * Cette methode permet de chercher et de renvoyer la liste des categories qui existentdans la BD
   * @return La liste des categories/ une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CategoryDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/category/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des categories
   *
   * Cette methode permet de chercher et de renvoyer la liste des categories qui existentdans la BD
   * @return La liste des categories/ une liste vide
   */
  findAll(): __Observable<Array<CategoryDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CategoryDto>)
    );
  }

  /**
   * Recherche d'une categorie par CODE
   *
   * Cette methode permet de chercher une categorie par son CODE
   * @param codeCategory undefined
   * @return La categorie a ete trouve dans la BD
   */
  findByCodeResponse(codeCategory: string): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/category/code/${encodeURIComponent(String(codeCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Recherche d'une categorie par CODE
   *
   * Cette methode permet de chercher une categorie par son CODE
   * @param codeCategory undefined
   * @return La categorie a ete trouve dans la BD
   */
  findByCode(codeCategory: string): __Observable<CategoryDto> {
    return this.findByCodeResponse(codeCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Enregistrer une categorie
   *
   * Cette methode permet d'enregistrer ou modifier une categorie
   * @param body undefined
   * @return L'objet categorie a ete cree/modifier
   */
  saveResponse(body?: CategoryDto): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock_backend/v1/category/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Enregistrer une categorie
   *
   * Cette methode permet d'enregistrer ou modifier une categorie
   * @param body undefined
   * @return L'objet categorie a ete cree/modifier
   */
  save(body?: CategoryDto): __Observable<CategoryDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Supprimer une categorie
   *
   * Cette methode permet de supprimer une categorie par son ID
   * @param idCategory undefined
   * @return La categorie a ete supprime
   */
  deleteResponse(idCategory: number): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock_backend/v1/category/delete/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Supprimer une categorie
   *
   * Cette methode permet de supprimer une categorie par son ID
   * @param idCategory undefined
   * @return La categorie a ete supprime
   */
  delete(idCategory: number): __Observable<CategoryDto> {
    return this.deleteResponse(idCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Recherche d'une categorie par l'ID
   *
   * Cette methode permet de chercher un categorie par son ID
   * @param idCategory undefined
   * @return La categorie a ete trouve dans la BD
   */
  findByIdResponse(idCategory: number): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/category/id/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Recherche d'une categorie par l'ID
   *
   * Cette methode permet de chercher un categorie par son ID
   * @param idCategory undefined
   * @return La categorie a ete trouve dans la BD
   */
  findById(idCategory: number): __Observable<CategoryDto> {
    return this.findByIdResponse(idCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }
}

module CategoriesApiService {
}

export { CategoriesApiService }
