import { Component, OnInit } from '@angular/core';
import {ClientDto} from "../../../../../gs-api/src/models/client-dto";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ClientService} from "../../client/service/client.service";
import {UtilisateurDto} from "../../../../../gs-api/src/models/utilisateur-dto";
import {UtilisateursService} from "../service/utilisateurs.service";

@Component({
  selector: 'app-delete-utilisateur',
  templateUrl: './delete-utilisateur.component.html',
  styleUrls: ['./delete-utilisateur.component.scss']
})
export class DeleteUtilisateurComponent implements OnInit {

  utilisateurDto: UtilisateurDto = {};

  constructor(private activeModal: NgbActiveModal,
              private utilisateursService: UtilisateursService,
              /* private toastr: ToastrService*/) { }

  ngOnInit(): void {
  }

  onDeleteUtilisateur(id: any) {
    this.utilisateursService.deleteUtilisateur(id).subscribe({
      next: response =>{
        this.activeModal.close('success');
        this.cancel();
      }, error: error =>{
        //this.toastr.error(error.message);
        this.cancel();
      }
    })
  }

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
