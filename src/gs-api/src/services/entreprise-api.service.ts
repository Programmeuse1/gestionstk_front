/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EntrepriseDto } from '../models/entreprise-dto';
@Injectable({
  providedIn: 'root',
})
class EntrepriseApiService extends __BaseService {
  static readonly findAllPath = '/gestiondestock_backend/v1/entreprise/all';
  static readonly savePath = '/gestiondestock_backend/v1/entreprise/create';
  static readonly deletePath = '/gestiondestock_backend/v1/entreprise/delete/{idEntreprise}';
  static readonly findByIdPath = '/gestiondestock_backend/v1/entreprise/id/{idEntreprise}';
  static readonly findByNomPath = '/gestiondestock_backend/v1/entreprise/nom/{nomEntreprise}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des entreprises
   *
   * Cette methode permet de chercher et de renvoyer la liste des entreprises qui existentdans la BD
   * @return La liste des entreprises/ une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<EntrepriseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/entreprise/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EntrepriseDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des entreprises
   *
   * Cette methode permet de chercher et de renvoyer la liste des entreprises qui existentdans la BD
   * @return La liste des entreprises/ une liste vide
   */
  findAll(): __Observable<Array<EntrepriseDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<EntrepriseDto>)
    );
  }

  /**
   * Enregistrer une entreprise
   *
   * Cette methode permet d'enregistrer ou modifier une entreprise
   * @param body undefined
   * @return L'objet entreprise a ete cree/modifier
   */
  saveResponse(body?: EntrepriseDto): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock_backend/v1/entreprise/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * Enregistrer une entreprise
   *
   * Cette methode permet d'enregistrer ou modifier une entreprise
   * @param body undefined
   * @return L'objet entreprise a ete cree/modifier
   */
  save(body?: EntrepriseDto): __Observable<EntrepriseDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * Supprimer une entreprise
   *
   * Cette methode permet de supprimer une entreprise par son ID
   * @param idEntreprise undefined
   * @return L'entreprise a ete supprime
   */
  deleteResponse(idEntreprise: number): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock_backend/v1/entreprise/delete/${encodeURIComponent(String(idEntreprise))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * Supprimer une entreprise
   *
   * Cette methode permet de supprimer une entreprise par son ID
   * @param idEntreprise undefined
   * @return L'entreprise a ete supprime
   */
  delete(idEntreprise: number): __Observable<EntrepriseDto> {
    return this.deleteResponse(idEntreprise).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * Recherche d'une entreprise par l'ID
   *
   * Cette methode permet de chercher une entreprise par son ID
   * @param idEntreprise undefined
   * @return L'entreprise a ete trouve dans la BD
   */
  findByIdResponse(idEntreprise: number): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/entreprise/id/${encodeURIComponent(String(idEntreprise))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * Recherche d'une entreprise par l'ID
   *
   * Cette methode permet de chercher une entreprise par son ID
   * @param idEntreprise undefined
   * @return L'entreprise a ete trouve dans la BD
   */
  findById(idEntreprise: number): __Observable<EntrepriseDto> {
    return this.findByIdResponse(idEntreprise).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * Recherche d'une entreprise par NOM
   *
   * Cette methode permet de chercher une entreprise par son NOM
   * @param nomEntreprise undefined
   * @return L'entreprise a ete trouve dans la BD
   */
  findByNomResponse(nomEntreprise: string): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/entreprise/nom/${encodeURIComponent(String(nomEntreprise))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * Recherche d'une entreprise par NOM
   *
   * Cette methode permet de chercher une entreprise par son NOM
   * @param nomEntreprise undefined
   * @return L'entreprise a ete trouve dans la BD
   */
  findByNom(nomEntreprise: string): __Observable<EntrepriseDto> {
    return this.findByNomResponse(nomEntreprise).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }
}

module EntrepriseApiService {
}

export { EntrepriseApiService }
