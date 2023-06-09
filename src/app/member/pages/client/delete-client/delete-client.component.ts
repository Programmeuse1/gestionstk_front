import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ClientDto} from "../../../../../gs-api/src/models/client-dto";
import {ClientService} from "../service/client.service";

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.scss']
})
export class DeleteClientComponent implements OnInit {

  clientDto: ClientDto = {};

  constructor(private activeModal: NgbActiveModal,
              private clientService: ClientService,
              /* private toastr: ToastrService*/) { }

  ngOnInit(): void {
  }

  onDeleteClient(id: any) {
    this.clientService.deleteClient(id).subscribe({
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
