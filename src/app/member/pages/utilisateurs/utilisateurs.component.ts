import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouvelUtilisateurComponent} from "./nouvel-utilisateur/nouvel-utilisateur.component";
import {UtilisateurDto} from "../../../../gs-api/src/models/utilisateur-dto";
import {UtilisateursService} from "./service/utilisateurs.service";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit{

  utilisateurList: Array<UtilisateurDto> = [];

  constructor(
    private ngbModal: NgbModal,
    private utilisateurService: UtilisateursService,
  ) {}

  openModal(): void {
    const modalRef = this.ngbModal.open(NouvelUtilisateurComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-utilisateurs' === res) {

      }
    })
  }

  ngOnInit(): void{
    this.getUtilisateurList();
  }

  getUtilisateurList(){
    this.utilisateurService.findUtilisateurAll().subscribe({
      next: value =>{
        console.log(value)
        this.utilisateurList = value;
      },
      error: error => {

      }
      });
  }
}
