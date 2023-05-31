/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MvtStockDto } from '../models/mvt-stock-dto';
@Injectable({
  providedIn: 'root',
})
class MvtstockApiService extends __BaseService {
  static readonly findAllPath = '/gestiondestock_backend/v1/mvtStock/all';
  static readonly savePath = '/gestiondestock_backend/v1/mvtStock/create';
  static readonly deletePath = '/gestiondestock_backend/v1/mvtStock/delete/{idMvtStock}';
  static readonly findByIdPath = '/gestiondestock_backend/v1/mvtStock/{idMvtStock}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<MvtStockDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/mvtStock/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MvtStockDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<MvtStockDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<MvtStockDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: MvtStockDto): __Observable<__StrictHttpResponse<MvtStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock_backend/v1/mvtStock/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStockDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: MvtStockDto): __Observable<MvtStockDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as MvtStockDto)
    );
  }

  /**
   * @param idMvtStock undefined
   */
  deleteResponse(idMvtStock: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock_backend/v1/mvtStock/delete/${encodeURIComponent(String(idMvtStock))}`,
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
   * @param idMvtStock undefined
   */
  delete(idMvtStock: number): __Observable<null> {
    return this.deleteResponse(idMvtStock).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdResponse(id: number): __Observable<__StrictHttpResponse<MvtStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/mvtStock/${encodeURIComponent(String(idMvtStock))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStockDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findById(id: number): __Observable<MvtStockDto> {
    return this.findByIdResponse(id).pipe(
      __map(_r => _r.body as MvtStockDto)
    );
  }
}

module MvtstockApiService {
}

export { MvtstockApiService }
