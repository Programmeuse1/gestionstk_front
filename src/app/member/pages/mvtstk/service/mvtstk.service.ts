import { Injectable } from '@angular/core';
import {MvtstockApiService} from "../../../../../gs-api/src/services/mvtstock-api.service";
import {Observable} from "rxjs";
import {MvtStockDto} from "../../../../../gs-api/src/models/mvt-stock-dto";
import {MvtStockCriteria} from "../../../../../gs-api/src/models/mvt-stock-criteria";

@Injectable({
  providedIn: 'root'
})
export class MvtstkService {

  constructor(
    private mvtstk: MvtstockApiService
  ) { }

  saveMvtStk(mvtStockDto: MvtStockDto): Observable<MvtStockDto> {
    return this.mvtstk.save(mvtStockDto);

  }


  findMvtStkById(idMvtStock: number): Observable<MvtStockDto> {
    return this.mvtstk.findById(idMvtStock);

  }


  findMvtStkAll(): Observable<Array<MvtStockDto>> {
    return this.mvtstk.findAll();

  }

  deleteMvtStk(idMvtStock: number): Observable<null> {
    return this.mvtstk.delete(idMvtStock);

  }

  listingMvtStock(mvtStockCriteria: MvtStockCriteria):Observable<MvtStockDto[]>{
    return this.mvtstk.listingMvtStock(mvtStockCriteria)
  }
}
