import { Injectable } from '@angular/core';
import {JaspertReportApiService} from "../../../gs-api/src/services";

@Injectable({
  providedIn: 'root'
})
export class JasperReportService {

  constructor(
    private jasperReportService: JaspertReportApiService
  ) { }

  printFactureClient(codeUser: string){
    return this.jasperReportService.printFactureClient(codeUser);
  }
}
