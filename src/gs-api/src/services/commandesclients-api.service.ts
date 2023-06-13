/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeClientDto } from '../models/commande-client-dto';
import { CommandeClientUpdate } from '../models/commande-client-update';
@Injectable({
  providedIn: 'root',
})
class CommandesclientsApiService extends __BaseService {
  static readonly findAllPath = '/gestiondestock_backend/v1/commandesclients/all';
  static readonly savePath = '/gestiondestock_backend/v1/commandesclients/create';
  static readonly deletePath = '/gestiondestock_backend/v1/commandesclients/delete/{idCommandeClient}';
  static readonly findByCodePath = '/gestiondestock_backend/v1/commandesclients/{codeCommandeClient}';
  static readonly findByIdPath = '/gestiondestock_backend/v1/commandesclients/{idCommandeClient}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/commandesclients/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<CommandeClientDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CommandeClientDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: CommandeClientUpdate): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock_backend/v1/commandesclients/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: CommandeClientUpdate): __Observable<CommandeClientDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @param idCommandeClient undefined
   * @return successful operation
   */
  deleteResponse(idCommandeClient: number): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock_backend/v1/commandesclients/delete/${encodeURIComponent(String(idCommandeClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @param idCommandeClient undefined
   * @return successful operation
   */
  delete(idCommandeClient: number): __Observable<CommandeClientDto> {
    return this.deleteResponse(idCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @param codeCommandeClient undefined
   * @return successful operation
   */
  findByCodeResponse(codeCommandeClient: string): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/commandesclients/${encodeURIComponent(String(codeCommandeClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @param codeCommandeClient undefined
   * @return successful operation
   */
  findByCode(codeCommandeClient: string): __Observable<CommandeClientDto> {
    return this.findByCodeResponse(codeCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @param idCommandeClient undefined
   * @return successful operation
   */
  findByIdResponse(idCommandeClient: number): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/commandesclients/${encodeURIComponent(String(idCommandeClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @param idCommandeClient undefined
   * @return successful operation
   */
  findById(idCommandeClient: number): __Observable<CommandeClientDto> {
    return this.findByIdResponse(idCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }
}

module CommandesclientsApiService {
}

export { CommandesclientsApiService }
