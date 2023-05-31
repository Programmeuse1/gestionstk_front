import { Injectable } from '@angular/core';
import {UtilisateurApiService} from "../../../../../gs-api/src/services/utilisateur-api.service";
import {Observable} from "rxjs";
import {UtilisateurDto} from "../../../../../gs-api/src/models/utilisateur-dto";

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(
    private utilisateur: UtilisateurApiService
  ) { }

  saveUtilisateur(utilisateurDto: UtilisateurDto): Observable<UtilisateurDto> {
    return this.utilisateur.save(utilisateurDto);

  }


  findUtilisateurById(idUtilisateur: number): Observable<UtilisateurDto> {
    return this.utilisateur.findById(idUtilisateur);

  }

  findUtilisateurByNom(nomUtilisateur: string): Observable<UtilisateurDto> {
    return this.utilisateur.findByNom(nomUtilisateur);

  }

  findUtilisateurAll(): Observable<Array<UtilisateurDto>> {
    return this.utilisateur.findAll();

  }

  deleteUtilisateur(idUtilisateur: number): Observable<null> {
    return this.utilisateur.delete(idUtilisateur);

  }

  currentuser(): Observable<UtilisateurDto> {
    return this.utilisateur.currentUser();

  }
}
