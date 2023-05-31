/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
@Injectable({
  providedIn: 'root',
})
class CommandesfournisseursApiService extends __BaseService {
  static readonly findAllPath = '/gestiondestock_backend/v1/commandesfournisseurs/all';
  static readonly findByCodePath = '/gestiondestock_backend/v1/commandesfournisseurs/code/{nomFournisseur}';
  static readonly savePath = '/gestiondestock_backend/v1/commandesfournisseurs/create';
  static readonly deletePath = '/gestiondestock_backend/v1/commandesfournisseurs/delete/{idCommandeFournisseur}';
  static readonly findByIdPath = '/gestiondestock_backend/v1/commandesfournisseurs/id/{idCommandeFournisseur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des commandes fournisseurs
   *
   * Cette methode permet de chercher et de renvoyer la liste des commandes fournisseurs qui existentdans la BD
   * @return La liste des commandes fournisseurs/ une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/commandesfournisseurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeFournisseurDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des commandes fournisseurs
   *
   * Cette methode permet de chercher et de renvoyer la liste des commandes fournisseurs qui existentdans la BD
   * @return La liste des commandes fournisseurs/ une liste vide
   */
  findAll(): __Observable<Array<CommandeFournisseurDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CommandeFournisseurDto>)
    );
  }

  /**
   * Recherche d'une commande fournisseur par CODE
   *
   * Cette methode permet de chercher une commande fournisseur par son CODE
   * @param codeCommandeFournisseur undefined
   * @return La commande fournisseur a ete trouve dans la BD
   */
  findByCodeResponse(codeCommandeFournisseur: string): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/commandesfournisseurs/code/${encodeURIComponent(String(nomFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Recherche d'une commande fournisseur par CODE
   *
   * Cette methode permet de chercher une commande fournisseur par son CODE
   * @param codeCommandeFournisseur undefined
   * @return La commande fournisseur a ete trouve dans la BD
   */
  findByCode(codeCommandeFournisseur: string): __Observable<CommandeFournisseurDto> {
    return this.findByCodeResponse(codeCommandeFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Enregistrer une commande fournisseur
   *
   * Cette methode permet d'enregistrer ou modifier une commande fournisseur
   * @param body undefined
   * @return L'objet commande fournisseur a ete cree/modifier
   */
  saveResponse(body?: CommandeFournisseurDto): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock_backend/v1/commandesfournisseurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Enregistrer une commande fournisseur
   *
   * Cette methode permet d'enregistrer ou modifier une commande fournisseur
   * @param body undefined
   * @return L'objet commande fournisseur a ete cree/modifier
   */
  save(body?: CommandeFournisseurDto): __Observable<CommandeFournisseurDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Supprimer une commande fournisseur
   *
   * Cette methode permet de supprimer une commande fournisseur par son ID
   * @param idCommandeFournisseur undefined
   * @return La commande fournisseur a ete supprime
   */
  deleteResponse(idCommandeFournisseur: number): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock_backend/v1/commandesfournisseurs/delete/${encodeURIComponent(String(idCommandeFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Supprimer une commande fournisseur
   *
   * Cette methode permet de supprimer une commande fournisseur par son ID
   * @param idCommandeFournisseur undefined
   * @return La commande fournisseur a ete supprime
   */
  delete(idCommandeFournisseur: number): __Observable<CommandeFournisseurDto> {
    return this.deleteResponse(idCommandeFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Recherche d'une commande fournisseur par l'ID
   *
   * Cette methode permet de chercher une commande fournisseur par son ID
   * @param idCommandeFournisseur undefined
   * @return La commande fournisseur a ete trouve dans la BD
   */
  findByIdResponse(idCommandeFournisseur: number): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/commandesfournisseurs/id/${encodeURIComponent(String(idCommandeFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Recherche d'une commande fournisseur par l'ID
   *
   * Cette methode permet de chercher une commande fournisseur par son ID
   * @param idCommandeFournisseur undefined
   * @return La commande fournisseur a ete trouve dans la BD
   */
  findById(idCommandeFournisseur: number): __Observable<CommandeFournisseurDto> {
    return this.findByIdResponse(idCommandeFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }
}

module CommandesfournisseursApiService {
}

export { CommandesfournisseursApiService }
