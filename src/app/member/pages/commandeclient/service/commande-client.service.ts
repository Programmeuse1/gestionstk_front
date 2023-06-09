import { Injectable } from '@angular/core';
import {CommandesclientsApiService} from "../../../../../gs-api/src/services";
import {Observable} from "rxjs";
import {CommandeClientDto} from "../../../../../gs-api/src/models/commande-client-dto";
import {CommandeClientUpdate} from "../../../../../gs-api/src/models/commande-client-update";
import {CommandeClientCriteria} from "../../../../../gs-api/src/models/commande-client-criteria";

@Injectable({
  providedIn: 'root'
})
export class CommandeClientService {

  constructor(
    private commandeClientService: CommandesclientsApiService
  ) { }

  saveCommandeClient(body: CommandeClientUpdate): Observable<CommandeClientDto>{
    return this.commandeClientService.save(body);
  }

  listCommandeClient(body: CommandeClientCriteria): Observable<CommandeClientDto[]>{
    return this.commandeClientService.listingCommmandeClient(body);
  }

  getClientById(id: number): Observable<CommandeClientDto>{
    return this.commandeClientService.findById(id)
  }
}
