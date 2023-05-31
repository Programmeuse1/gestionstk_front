/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UtilisateurDto } from '../models/utilisateur-dto';
@Injectable({
  providedIn: 'root',
})
class UtilisateurApiService extends __BaseService {
  static readonly findAllPath = '/gestiondestock_backend/v1/utilisateur/all';
  static readonly savePath = '/gestiondestock_backend/v1/utilisateur/create';
  static readonly currentUserPath = '/gestiondestock_backend/v1/utilisateur/currentUser';
  static readonly deletePath = '/gestiondestock_backend/v1/utilisateur/delete/{idUtilisateur}';
  static readonly findByIdPath = '/gestiondestock_backend/v1/utilisateur/id/{idUtilisateur}';
  static readonly findByNomPath = '/gestiondestock_backend/v1/utilisateur/nom/{nomUtilisateur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des utilisateurs
   *
   * Cette methode permet de chercher et de renvoyer la liste des futilisateurs qui existentdans la BD
   * @return La liste des utilisateurs/ une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/utilisateur/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des utilisateurs
   *
   * Cette methode permet de chercher et de renvoyer la liste des futilisateurs qui existentdans la BD
   * @return La liste des utilisateurs/ une liste vide
   */
  findAll(): __Observable<Array<UtilisateurDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Enregistrer un utilisateur
   *
   * Cette methode permet d'enregistrer ou modifier un utilisateur
   * @param body undefined
   * @return L'objet utilisateur a ete cree/modifier
   */
  saveResponse(body?: UtilisateurDto): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock_backend/v1/utilisateur/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * Enregistrer un utilisateur
   *
   * Cette methode permet d'enregistrer ou modifier un utilisateur
   * @param body undefined
   * @return L'objet utilisateur a ete cree/modifier
   */
  save(body?: UtilisateurDto): __Observable<UtilisateurDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Retourne l'utilisateur connecté
   *
   * Cette méthode permet de retourner les informations de l'utilisateur connecté
   * @return Informations de l'utilisateur retournées avec succès
   */
  currentUserResponse(): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/utilisateur/currentUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * Retourne l'utilisateur connecté
   *
   * Cette méthode permet de retourner les informations de l'utilisateur connecté
   * @return Informations de l'utilisateur retournées avec succès
   */
  currentUser(): __Observable<UtilisateurDto> {
    return this.currentUserResponse().pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Supprimer un utilisateur
   *
   * Cette methode permet de supprimer un utilisateur par son ID
   * @param idUtilisateur undefined
   */
  deleteResponse(idUtilisateur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock_backend/v1/utilisateur/delete/${encodeURIComponent(String(idUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Supprimer un utilisateur
   *
   * Cette methode permet de supprimer un utilisateur par son ID
   * @param idUtilisateur undefined
   */
  delete(idUtilisateur: number): __Observable<null> {
    return this.deleteResponse(idUtilisateur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Recherche d'un utilisateur par l'ID
   *
   * Cette methode permet de chercher un utilisateur par son ID
   * @param idUtilisateur undefined
   * @return L'utilisateur a ete trouve dans la BD
   */
  findByIdResponse(idUtilisateur: number): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/utilisateur/id/${encodeURIComponent(String(idUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * Recherche d'un utilisateur par l'ID
   *
   * Cette methode permet de chercher un utilisateur par son ID
   * @param idUtilisateur undefined
   * @return L'utilisateur a ete trouve dans la BD
   */
  findById(idUtilisateur: number): __Observable<UtilisateurDto> {
    return this.findByIdResponse(idUtilisateur).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Recherche d'un utilisateur par NOM
   *
   * Cette methode permet de chercher un utilisateur par son NOM
   * @param nomUtilisateur undefined
   * @return L'utilisateur a ete trouve dans la BD
   */
  findByNomResponse(nomUtilisateur: string): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/utilisateur/nom/${encodeURIComponent(String(nomUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * Recherche d'un utilisateur par NOM
   *
   * Cette methode permet de chercher un utilisateur par son NOM
   * @param nomUtilisateur undefined
   * @return L'utilisateur a ete trouve dans la BD
   */
  findByNom(nomUtilisateur: string): __Observable<UtilisateurDto> {
    return this.findByNomResponse(nomUtilisateur).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }
}

module UtilisateurApiService {
}

export { UtilisateurApiService }
