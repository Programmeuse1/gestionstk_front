/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ClientDto } from '../models/client-dto';
@Injectable({
  providedIn: 'root',
})
class ClientsApiService extends __BaseService {
  static readonly findAllPath = '/gestiondestock_backend/v1/client/all';
  static readonly savePath = '/gestiondestock_backend/v1/client/create';
  static readonly deletePath = '/gestiondestock_backend/v1/client/delete/{idClient}';
  static readonly findByIdPath = '/gestiondestock_backend/v1/client/id/{idClient}';
  static readonly findByNomPath = '/gestiondestock_backend/v1/client/nom/{nomClient}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des clients
   *
   * Cette methode permet de chercher et de renvoyer la liste des clients qui existentdans la BD
   * @return La liste des clients/ une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<ClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/client/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des clients
   *
   * Cette methode permet de chercher et de renvoyer la liste des clients qui existentdans la BD
   * @return La liste des clients/ une liste vide
   */
  findAll(): __Observable<Array<ClientDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<ClientDto>)
    );
  }

  /**
   * Enregistrer un client
   *
   * Cette methode permet d'enregistrer ou modifier un client
   * @param body undefined
   * @return L'objet client a ete cree/modifier
   */
  saveResponse(body?: ClientDto): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock_backend/v1/client/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Enregistrer un client
   *
   * Cette methode permet d'enregistrer ou modifier un client
   * @param body undefined
   * @return L'objet client a ete cree/modifier
   */
  save(body?: ClientDto): __Observable<ClientDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * Supprimer un client
   *
   * Cette methode permet de supprimer un client par son ID
   * @param idClient undefined
   * @return Le client a ete supprime
   */
  deleteResponse(idClient: number): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock_backend/v1/client/delete/${encodeURIComponent(String(idClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Supprimer un client
   *
   * Cette methode permet de supprimer un client par son ID
   * @param idClient undefined
   * @return Le client a ete supprime
   */
  delete(idClient: number): __Observable<ClientDto> {
    return this.deleteResponse(idClient).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * Recherche d'un client par l'ID
   *
   * Cette methode permet de chercher un client par son ID
   * @param idClient undefined
   * @return Le client a ete trouve dans la BD
   */
  findByIdResponse(idClient: number): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/client/id/${encodeURIComponent(String(idClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Recherche d'un client par l'ID
   *
   * Cette methode permet de chercher un client par son ID
   * @param idClient undefined
   * @return Le client a ete trouve dans la BD
   */
  findById(idClient: number): __Observable<ClientDto> {
    return this.findByIdResponse(idClient).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * Recherche d'un client par NOM
   *
   * Cette methode permet de chercher un client par son NOM
   * @param nomClient undefined
   * @return Le client a ete trouve dans la BD
   */
  findByNomResponse(nomClient: string): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/client/nom/${encodeURIComponent(String(nomClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Recherche d'un client par NOM
   *
   * Cette methode permet de chercher un client par son NOM
   * @param nomClient undefined
   * @return Le client a ete trouve dans la BD
   */
  findByNom(nomClient: string): __Observable<ClientDto> {
    return this.findByNomResponse(nomClient).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }
}

module ClientsApiService {
}

export { ClientsApiService }
