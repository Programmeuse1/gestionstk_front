/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FournisseurDto } from '../models/fournisseur-dto';
import { FournisseurCriteria } from '../models/fournisseur-criteria';
@Injectable({
  providedIn: 'root',
})
class FournisseurApiService extends __BaseService {
  static readonly findAllPath = '/gestiondestock_backend/v1/fournisseur/all';
  static readonly savePath = '/gestiondestock_backend/v1/fournisseur/create';
  static readonly deletePath = '/gestiondestock_backend/v1/fournisseur/delete/{idFournisseur}';
  static readonly findByIdPath = '/gestiondestock_backend/v1/fournisseur/id/{idFournisseur}';
  static readonly listingFournisseurPath = '/gestiondestock_backend/v1/fournisseur/listingFournisseur';
  static readonly findByNomPath = '/gestiondestock_backend/v1/fournisseur/nom/{nomFournisseur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des fournisseurs
   *
   * Cette methode permet de chercher et de renvoyer la liste des fournisseurs qui existentdans la BD
   * @return La liste des fournisseurs/ une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<FournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/fournisseur/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des fournisseurs
   *
   * Cette methode permet de chercher et de renvoyer la liste des fournisseurs qui existentdans la BD
   * @return La liste des fournisseurs/ une liste vide
   */
  findAll(): __Observable<Array<FournisseurDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<FournisseurDto>)
    );
  }

  /**
   * Enregistrer un fournisseur
   *
   * Cette methode permet d'enregistrer ou modifier un fournisseur
   * @param body undefined
   * @return L'objet fournisseur a ete cree/modifier
   */
  saveResponse(body?: FournisseurDto): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock_backend/v1/fournisseur/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * Enregistrer un fournisseur
   *
   * Cette methode permet d'enregistrer ou modifier un fournisseur
   * @param body undefined
   * @return L'objet fournisseur a ete cree/modifier
   */
  save(body?: FournisseurDto): __Observable<FournisseurDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * Supprimer un fournisseur
   *
   * Cette methode permet de supprimer un fournisseur par son ID
   * @param idFournisseur undefined
   * @return Le fournisseur a ete supprime
   */
  deleteResponse(idFournisseur: number): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock_backend/v1/fournisseur/delete/${encodeURIComponent(String(idFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * Supprimer un fournisseur
   *
   * Cette methode permet de supprimer un fournisseur par son ID
   * @param idFournisseur undefined
   * @return Le fournisseur a ete supprime
   */
  delete(idFournisseur: number): __Observable<FournisseurDto> {
    return this.deleteResponse(idFournisseur).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * Recherche d'un fournisseur par l'ID
   *
   * Cette methode permet de chercher un fournisseur par son ID
   * @param idFournisseur undefined
   * @return Le fournisseur a ete trouve dans la BD
   */
  findByIdResponse(idFournisseur: number): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/fournisseur/id/${encodeURIComponent(String(idFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * Recherche d'un fournisseur par l'ID
   *
   * Cette methode permet de chercher un fournisseur par son ID
   * @param idFournisseur undefined
   * @return Le fournisseur a ete trouve dans la BD
   */
  findById(idFournisseur: number): __Observable<FournisseurDto> {
    return this.findByIdResponse(idFournisseur).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * Renvoi la liste des fournisseurs en fonction des critères de recherche
   *
   * Cette methode permet de chercher et de renvoyer la liste des fournisseurs qui existentdans la BD
   * @param body undefined
   * @return La liste des fournisseurs/ une liste vide
   */
  listingFournisseurResponse(body?: FournisseurCriteria): __Observable<__StrictHttpResponse<Array<FournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock_backend/v1/fournisseur/listingFournisseur`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des fournisseurs en fonction des critères de recherche
   *
   * Cette methode permet de chercher et de renvoyer la liste des fournisseurs qui existentdans la BD
   * @param body undefined
   * @return La liste des fournisseurs/ une liste vide
   */
  listingFournisseur(body?: FournisseurCriteria): __Observable<Array<FournisseurDto>> {
    return this.listingFournisseurResponse(body).pipe(
      __map(_r => _r.body as Array<FournisseurDto>)
    );
  }

  /**
   * Recherche d'un fournisseur par NOM
   *
   * Cette methode permet de chercher un fournisseur par son NOM
   * @param nomFournisseur undefined
   * @return Le fournisseur a ete trouve dans la BD
   */
  findByNomResponse(nomFournisseur: string): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/fournisseur/nom/${encodeURIComponent(String(nomFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * Recherche d'un fournisseur par NOM
   *
   * Cette methode permet de chercher un fournisseur par son NOM
   * @param nomFournisseur undefined
   * @return Le fournisseur a ete trouve dans la BD
   */
  findByNom(nomFournisseur: string): __Observable<FournisseurDto> {
    return this.findByNomResponse(nomFournisseur).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }
}

module FournisseurApiService {
}

export { FournisseurApiService }
