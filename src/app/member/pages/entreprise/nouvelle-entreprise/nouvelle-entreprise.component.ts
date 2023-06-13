import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {EntrepriseService} from "../service/entreprise.service";

@Component({
  selector: 'app-nouvelle-entreprise',
  templateUrl: './nouvelle-entreprise.component.html',
  styleUrls: ['./nouvelle-entreprise.component.scss']
})
export class NouvelleEntrepriseComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private entrepriseService: EntrepriseService
  ) { }

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

  ngOnInit(): void {
  }

}
