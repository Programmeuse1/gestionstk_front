/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ReportingPrinter } from '../models/reporting-printer';
@Injectable({
  providedIn: 'root',
})
class JaspertReportApiService extends __BaseService {
  static readonly printFactureClientPath = '/gestiondestock_backend/v1/jaspertReport/printCommandeClient/{codeCommande}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Return printer appro information from its ID and Language
   *
   * Retrieves a printer appro based on the given ID and Language
   * @param codeCommande undefined
   * @return Appro printer information returned successfully
   */
  printFactureClientResponse(codeCommande: string): __Observable<__StrictHttpResponse<ReportingPrinter>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock_backend/v1/jaspertReport/printCommandeClient/${encodeURIComponent(String(codeCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReportingPrinter>;
      })
    );
  }
  /**
   * Return printer appro information from its ID and Language
   *
   * Retrieves a printer appro based on the given ID and Language
   * @param codeCommande undefined
   * @return Appro printer information returned successfully
   */
  printFactureClient(codeCommande: string): __Observable<ReportingPrinter> {
    return this.printFactureClientResponse(codeCommande).pipe(
      __map(_r => _r.body as ReportingPrinter)
    );
  }
}

module JaspertReportApiService {
}

export { JaspertReportApiService }
