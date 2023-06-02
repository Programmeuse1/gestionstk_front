import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouveauFournisseurComponent} from "./nouveau-fournisseur/nouveau-fournisseur.component";
import {FormBuilder} from "@angular/forms";
import {FournisseurDto} from "../../../../gs-api/src/models/fournisseur-dto";
import {FournisseursService} from "./service/fournisseurs.service";

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.scss']
})
export class FournisseursComponent {

  searchForm = this.fb.group({
    nom: [],
    /*numeroCni: [],
    email: [],
    telephone: [],
    adresse: [],*/
    itemsPerPage: [10],
  });

  fournisseurList: Array<FournisseurDto> = [];

  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private fournisseurService: FournisseursService
  ) {}

  openModal(): void {
    const modalRef = this.ngbModal.open(NouveauFournisseurComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.getFournisseurList();

      }
    })
  }

  ngOnInit(): void{
    this.getFournisseurList();
  }

  getFournisseurList(){
    this.fournisseurService.findFournisseurAll().subscribe({
      next: value =>{
        this.fournisseurList = value;
        console.log(this.fournisseurList);
      },
      error:error => {

      }
    })
  }

  findAll(){

  }
}
