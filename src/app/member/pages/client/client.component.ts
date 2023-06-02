import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouveauClientComponent} from "./nouveau-client/nouveau-client.component";
import {FormBuilder} from "@angular/forms";
import {UtilisateurDto} from "../../../../gs-api/src/models/utilisateur-dto";
import {ClientDto} from "../../../../gs-api/src/models/client-dto";
import {ClientService} from "./service/client.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

  searchForm = this.fb.group({
    nom: [],
    /*numeroCni: [],
    email: [],
    telephone: [],
    adresse: [],*/
    itemsPerPage: [10],
  });

  clientList: Array<ClientDto> = [];


  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private clientsService: ClientService
  ) {}

  openModal(): void {
    const modalRef = this.ngbModal.open(NouveauClientComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-client' === res) {

      }
    })
  }

  ngOnInit(): void{
    this.getClientList();
  }

  getClientList(){
    this.clientsService.findClientAll().subscribe({
      next: value =>{
        this.clientList = value;
        console.log(this.clientList);
      },
      error: error => {

      }
    });
  }

  findAll() {

  }
}
