import { Injectable } from '@angular/core';
import {FournisseurApiService} from "../../../../../gs-api/src/services/fournisseur-api.service";
import {Observable} from "rxjs";
import {FournisseurDto} from "../../../../../gs-api/src/models/fournisseur-dto";

@Injectable({
  providedIn: 'root'
})
export class FournisseursService {

  constructor(
    private fournisseur: FournisseurApiService
  ) { }

  saveFournisseur(fournisseurDto: FournisseurDto): Observable<FournisseurDto> {
    return this.fournisseur.save(fournisseurDto);

  }


  findFournisseurById(idFournisseur: number): Observable<FournisseurDto> {
    return this.fournisseur.findById(idFournisseur);

  }

  findFournisseurByNom(nomFournisseur: string): Observable<FournisseurDto> {
    return this.fournisseur.findByNom(nomFournisseur);

  }

  findFournisseurAll(): Observable<Array<FournisseurDto>> {
    return this.fournisseur.findAll();

  }

  deleteFournisseur(idFournisseur: number): Observable<FournisseurDto> {
    return this.fournisseur.delete(idFournisseur);

  }

}
