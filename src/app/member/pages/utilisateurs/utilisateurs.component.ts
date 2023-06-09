import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {NouvelUtilisateurComponent} from "./nouvel-utilisateur/nouvel-utilisateur.component";
import {UtilisateurDto} from "../../../../gs-api/src/models/utilisateur-dto";
import {UtilisateursService} from "./service/utilisateurs.service";
import {FormBuilder} from "@angular/forms";
import {ClientDto} from "../../../../gs-api/src/models/client-dto";
import {DeleteClientComponent} from "../client/delete-client/delete-client.component";
import {DeleteUtilisateurComponent} from "./delete-utilisateur/delete-utilisateur.component";
import {DetailClientComponent} from "../client/detail-client/detail-client.component";
import {DetailUtilisateurComponent} from "./detail-utilisateur/detail-utilisateur.component";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit{

  utilisateurList: UtilisateurDto [] = [];

  searchForm = this.fb.group({
    nom: [],
    code: [],
    actif: [],
    nombreDeResultat: ["10"],
  });


  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private utilisateurService: UtilisateursService,
  ) {}

  ngOnInit(): void{
    this.findAll();
  }

  findAll() {
    this.utilisateurService.listingUtilisateur({
        nom: this.searchForm.value.nom ?? undefined,
        code: this.searchForm.value.code ?? undefined,
        actif: this.searchForm.value.actif ?? undefined,
        nombreDeResultat: this.searchForm.value.nombreDeResultat ?? "10"
      }
    ).subscribe({
      next: response =>{
        this.utilisateurList = response;
      },
      error: err => console.log(err)
    })
  }

  openModal(): void {
    const modalRef = this.ngbModal.open(NouvelUtilisateurComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.findAll();
      }
    })
  }

  updateUtilisateur(utilisateurDto: UtilisateurDto) {
    console.log(utilisateurDto);
    const modalRef = this.ngbModal.open(NouvelUtilisateurComponent, {size: 'md'});
    this.closeModal(modalRef, utilisateurDto);
  }

  detailUtilisateur(utilisateurDto: UtilisateurDto) {
    const modalRef = this.ngbModal.open(DetailUtilisateurComponent, {size: 'lg'});
    this.closeModal(modalRef, utilisateurDto);
  }

  deleteUtilisateur(utilisateurDto: UtilisateurDto) {
    const modalRef = this.ngbModal.open(DeleteUtilisateurComponent, {size: 'md'});
    this.closeModal(modalRef, utilisateurDto);
  }

  closeModal(modalRef: NgbModalRef, utilisateurDto: UtilisateurDto): void{
    modalRef.componentInstance.utilisateurDto = utilisateurDto;
    modalRef.closed.subscribe((res) => {
      if ('success' === res){
        this.findAll();
      }
    });
  }


}
