import { Injectable } from '@angular/core';
import {ClientsApiService} from "../../../../../gs-api/src/services/clients-api.service";
import {Observable} from "rxjs";
import {ClientDto} from "../../../../../gs-api/src/models/client-dto";
import {ClientCriteria} from "../../../../../gs-api/src/models/client-criteria";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private clients: ClientsApiService
  ) { }

  saveClient(clientDto: ClientDto): Observable<ClientDto> {
    return this.clients.save(clientDto);

  }


  findClientById(idClient: number): Observable<ClientDto> {
    return this.clients.findById(idClient);

  }

  findClientByNom(nomClient: string): Observable<ClientDto> {
    return this.clients.findByNom(nomClient);

  }

  findClientAll(): Observable<Array<ClientDto>> {
    return this.clients.findAll();

  }

  deleteClient(idClient: number): Observable<ClientDto> {
    return this.clients.delete(idClient);

  }

  listingClient(clientCriteria: ClientCriteria):Observable<ClientDto[]>{
    return this.clients.listingClient(clientCriteria)
  }
}
