/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RolesDto } from '../models/roles-dto';
@Injectable({
  providedIn: 'root',
})
class RolesApiService extends __BaseService {
  static readonly findAllPath = '/gestiondestock_backend/v1/roles/all';
  static readonly savePath = '/gestiondestock_backend/v1/roles/create';
  static readonly deletePath = '/gestiondestock_backend/v1/roles/delete/{idRoles}';
  static readonly findByIdPath = '/gestiondestock_backend/v1/roles/id/{idRoles}';
  static readonly findByRoleNamePath = '/gestiondestock_backend/v1/roles/roleName/{roleNameRoles}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des roles
   *
   * Cette methode permet de chercher et de renvoyer la liste des roles qui existentdans la BD
   * @return La liste des roles/ une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<RolesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/roles/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RolesDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des roles
   *
   * Cette methode permet de chercher et de renvoyer la liste des roles qui existentdans la BD
   * @return La liste des roles/ une liste vide
   */
  findAll(): __Observable<Array<RolesDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<RolesDto>)
    );
  }

  /**
   * Enregistrer un role
   *
   * Cette methode permet d'enregistrer ou modifier un role
   * @param body undefined
   * @return L'objet role a ete cree/modifier
   */
  saveResponse(body?: RolesDto): __Observable<__StrictHttpResponse<RolesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock_backend/v1/roles/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RolesDto>;
      })
    );
  }
  /**
   * Enregistrer un role
   *
   * Cette methode permet d'enregistrer ou modifier un role
   * @param body undefined
   * @return L'objet role a ete cree/modifier
   */
  save(body?: RolesDto): __Observable<RolesDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as RolesDto)
    );
  }

  /**
   * Supprimer un role
   *
   * Cette methode permet de supprimer un role par son ID
   * @param idRoles undefined
   * @return Le role a ete supprime
   */
  deleteResponse(idRoles: number): __Observable<__StrictHttpResponse<RolesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock_backend/v1/roles/delete/${encodeURIComponent(String(idRoles))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RolesDto>;
      })
    );
  }
  /**
   * Supprimer un role
   *
   * Cette methode permet de supprimer un role par son ID
   * @param idRoles undefined
   * @return Le role a ete supprime
   */
  delete(idRoles: number): __Observable<RolesDto> {
    return this.deleteResponse(idRoles).pipe(
      __map(_r => _r.body as RolesDto)
    );
  }

  /**
   * Recherche d'un role par l'ID
   *
   * Cette methode permet de chercher un role par son ID
   * @param idRoles undefined
   * @return Le role a ete trouve dans la BD
   */
  findByIdResponse(idRoles: number): __Observable<__StrictHttpResponse<RolesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/roles/id/${encodeURIComponent(String(idRoles))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RolesDto>;
      })
    );
  }
  /**
   * Recherche d'un role par l'ID
   *
   * Cette methode permet de chercher un role par son ID
   * @param idRoles undefined
   * @return Le role a ete trouve dans la BD
   */
  findById(idRoles: number): __Observable<RolesDto> {
    return this.findByIdResponse(idRoles).pipe(
      __map(_r => _r.body as RolesDto)
    );
  }

  /**
   * Recherche d'un role par ROLENAME
   *
   * Cette methode permet de chercher un role par son ROLENAME
   * @param roleNameRoles undefined
   * @return Le role a ete trouve dans la BD
   */
  findByRoleNameResponse(roleNameRoles: string): __Observable<__StrictHttpResponse<RolesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/roles/roleName/${encodeURIComponent(String(roleNameRoles))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RolesDto>;
      })
    );
  }
  /**
   * Recherche d'un role par ROLENAME
   *
   * Cette methode permet de chercher un role par son ROLENAME
   * @param roleNameRoles undefined
   * @return Le role a ete trouve dans la BD
   */
  findByRoleName(roleNameRoles: string): __Observable<RolesDto> {
    return this.findByRoleNameResponse(roleNameRoles).pipe(
      __map(_r => _r.body as RolesDto)
    );
  }
}

module RolesApiService {
}

export { RolesApiService }
