import { Injectable } from '@angular/core';
import {CommandeClientService} from "../service/commande-client.service";
import {ActivatedRouteSnapshot} from "@angular/router";
import {Observable,mergeMap,of} from "rxjs";
import {CommandeClientDto} from "../../../../../gs-api/src/models/commande-client-dto";

@Injectable({
  providedIn: 'root'
})
export class CommandeclientResolveService {

  constructor(
    private commandeClientService: CommandeClientService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<CommandeClientDto> | Promise<CommandeClientDto> | CommandeClientDto {
    const id = route.params['id'] != null ? route.params['id'] : null;
    if(id) {
      return this.commandeClientService.getClientById(id).pipe(
        mergeMap((commandeClient: CommandeClientDto) => {
          return of(commandeClient);
        })
      );
    }
    return of({});
  }
}
