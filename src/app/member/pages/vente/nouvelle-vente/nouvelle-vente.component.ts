import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-nouvelle-vente',
  templateUrl: './nouvelle-vente.component.html',
  styleUrls: ['./nouvelle-vente.component.scss']
})
export class NouvelleVenteComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {}

  cancel(): void {
    this.activeModal.dismiss('cancel');
  }

  ngOnInit(): void {
  }

}
