import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, Validators} from "@angular/forms";
import {ClientService} from "../service/client.service";
import {ClientDto} from "../../../../../gs-api/src/models/client-dto";
import {ArticleDto} from "../../../../../gs-api/src/models/article-dto";

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.scss']
})
export class NouveauClientComponent implements OnInit{

  clientDto: ClientDto = {};

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private clientsService: ClientService
  ) {}

  ngOnInit(): void {
    this.updateForm(this.clientDto);
  }

  updateForm(client: ClientDto): void{
    console.log(client);
    this.clientsForm.patchValue({
      // codearticle: article.code,
      nom: client.nom,
      prenom: client.prenom,
      numTel: client.numTel,
      actif: client?.actif ?? true
    });
  }

  clientsForm = this.fb.group({
    nom: ["", Validators.required],
    numTel: ["", Validators.required],
    prenom: ["", Validators.required],
    adresse: ["", Validators.required],
    // email: ["", Validators.required],
    actif: [true],


  });

  saveValue(): ClientDto {
    return {
      ...this.clientDto,
      actif: this.clientsForm?.get('actif')?.value ?? true,
      nom: this.clientsForm?.get('nom')?.value ?? '',
      numTel: this.clientsForm?.get('numTel')?.value ?? '',
      prenom: this.clientsForm?.get('prenom')?.value ?? '',
      adresse:{
        adresse1: this.clientsForm?.get('adresse1')?.value ?? 'Douala',
        codepostale: this.clientsForm?.get('codepostale')?.value ?? '7512',
        pays: this.clientsForm?.get('pays')?.value ?? 'Cameroun',
        ville: this.clientsForm?.get('ville')?.value ?? 'Douala',
      }
    }
  }

  saveClient():void{
    this.clientsService.saveClient(this.saveValue()).subscribe({
      next: (res) => {
        console.log(res);
        this.activeModal.close('success');
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
