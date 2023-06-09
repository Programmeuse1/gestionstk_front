import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {NouveauClientComponent} from "./nouveau-client/nouveau-client.component";
import {FormBuilder} from "@angular/forms";
import {UtilisateurDto} from "../../../../gs-api/src/models/utilisateur-dto";
import {ClientDto} from "../../../../gs-api/src/models/client-dto";
import {ClientService} from "./service/client.service";
import {ArticleDto} from "../../../../gs-api/src/models/article-dto";
import {NouvelArticleComponent} from "../article/nouvel-article/nouvel-article.component";
import {DeleteArticleComponent} from "../article/delete-article/delete-article.component";
import {DeleteClientComponent} from "./delete-client/delete-client.component";
import {DetailArticleComponent} from "../article/detail-article/detail-article.component";
import {DetailClientComponent} from "./detail-client/detail-client.component";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit{

  clientList: ClientDto [] = [];
  searchForm = this.fb.group({
    nom: [],
    code: [],
    actif: [],
    nombreDeResultat: ["10"],
  });



  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private clientsService: ClientService
  ) {}

  ngOnInit(): void{
     this.findAll();
  }

  findAll() {
    this.clientsService.listingClient({
        nom: this.searchForm.value.nom ?? undefined,
        code: this.searchForm.value.code ?? undefined,
        actif: this.searchForm.value.actif ?? undefined,
        nombreDeResultat: this.searchForm.value.nombreDeResultat ?? "10"
      }
    ).subscribe({
      next: response =>{
        this.clientList = response;
      },
      error: err => console.log(err)
    })
  }

  openModal(): void {
    const modalRef = this.ngbModal.open(NouveauClientComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.findAll();
      }
    })
  }

  updateClient(clientDto: ClientDto) {
    const modalRef = this.ngbModal.open(NouveauClientComponent, {size: 'md'});
    this.closeModal(modalRef, clientDto);
  }

  detailClient(clientDto: ClientDto) {
    const modalRef = this.ngbModal.open(DetailClientComponent, {size: 'lg'});
    this.closeModal(modalRef, clientDto);
  }

  deleteClient(clientDto: ClientDto) {
    const modalRef = this.ngbModal.open(DeleteClientComponent, {size: 'md'});
    this.closeModal(modalRef, clientDto);
  }

  closeModal(modalRef: NgbModalRef, clientDto: ClientDto): void{
    modalRef.componentInstance.clientDto = clientDto;
    modalRef.closed.subscribe((res) => {
      if ('success' === res){
        this.findAll();
      }
    });
  }


}
