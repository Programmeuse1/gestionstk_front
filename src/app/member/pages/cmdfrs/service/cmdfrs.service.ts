import { Injectable } from '@angular/core';
import {CommandesfournisseursApiService} from "../../../../../gs-api/src/services/commandesfournisseurs-api.service";
import {Observable} from "rxjs";
import {CommandeFournisseurDto} from "../../../../../gs-api/src/models/commande-fournisseur-dto";

@Injectable({
  providedIn: 'root'
})
export class CmdfrsService {

  constructor(
    private commandefournisseurs: CommandesfournisseursApiService
  ) { }

  saveCmdfrs(commandeFournisseurDto: CommandeFournisseurDto): Observable<CommandeFournisseurDto> {
    return this.commandefournisseurs.save(commandeFournisseurDto);

  }


  findCmdfrsById(idCommandeFournisseur: number): Observable<CommandeFournisseurDto> {
    return this.commandefournisseurs.findById(idCommandeFournisseur);

  }

  findCmdfrsByCode(codeCommandeFournisseur: string): Observable<CommandeFournisseurDto> {
    return this.commandefournisseurs.findByCode(codeCommandeFournisseur);

  }

  findCmdfrsAll(): Observable<Array<CommandeFournisseurDto>> {
    return this.commandefournisseurs.findAll();

  }

  deleteCmdfrs(idCommandeFournisseur: number): Observable<CommandeFournisseurDto> {
    return this.commandefournisseurs.delete(idCommandeFournisseur);

  }
}
