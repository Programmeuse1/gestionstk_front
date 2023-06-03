import { Injectable } from '@angular/core';
import {VentesApiService} from "../../../../../gs-api/src/services/ventes-api.service";
import {Observable} from "rxjs";
import {VentesDto} from "../../../../../gs-api/src/models/ventes-dto";

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  constructor(
    private vente: VentesApiService
  ) { }

  savVente(ventesDto: VentesDto): Observable<VentesDto> {
    return this.vente.save(ventesDto);

  }


  findVenteById(idVente: number): Observable<VentesDto> {
    return this.vente.findById(idVente);

  }

  findVenteByCode(codeVente: string): Observable<VentesDto> {
    return this.vente.findByCode(codeVente);

  }

  findVenteAll(): Observable<Array<VentesDto>> {
    return this.vente.findAll();

  }

  deleteVente(idVente: number): Observable<null> {
    return this.vente.delete(idVente);

  }
}
