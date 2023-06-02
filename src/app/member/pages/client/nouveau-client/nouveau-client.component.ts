import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {ClientService} from "../service/client.service";
import {ClientDto} from "../../../../../gs-api/src/models/client-dto";

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.scss']
})
export class NouveauClientComponent {

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private clientsService: ClientService
  ) {}

  clientsForm = this.fb.group({
    id: [null],
    nom: [null],
    numTel: [null],
    prenom: [null],


  });

  saveValue(): ClientDto {
    return {
      nom: this.clientsForm?.get('nom')?.value ?? '',
      numTel: this.clientsForm?.get('numTel')?.value ?? '',
      prenom: this.clientsForm?.get('prenom')?.value ?? '',
      adresse:{
        adresse1: this.clientsForm?.get('adresse1')?.value ?? '',
        codepostale: this.clientsForm?.get('codepostale')?.value ?? '',
        pays: this.clientsForm?.get('pays')?.value ?? '',
        ville: this.clientsForm?.get('ville')?.value ?? '',
      }
    }
  }

  saveClient():void{
    this.clientsService.saveClient(this.saveValue()).subscribe({
      next: (res) => {
        console.log(res);
        this.cancel();
      },
      error: error =>{
      }
    })
  }

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

}
