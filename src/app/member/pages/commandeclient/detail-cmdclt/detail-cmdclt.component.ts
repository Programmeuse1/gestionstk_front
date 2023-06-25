import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CommandeClientDto} from "../../../../../gs-api/src/models/commande-client-dto";
import {ActivatedRoute} from "@angular/router";
import {CommandeClientService} from "../service/commande-client.service";
import {JasperReportService} from "../../../service/jasper-report.service";

@Component({
  selector: 'app-detail-cmdclt',
  templateUrl: './detail-cmdclt.component.html',
  styleUrls: ['./detail-cmdclt.component.scss']
})
export class DetailCmdcltComponent implements OnInit{

  commandeClientDto: CommandeClientDto = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private commandeClientService: CommandeClientService,
    private jasperReportService: JasperReportService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({commandeClient}) => {
      if (commandeClient) {
        this.commandeClientDto = commandeClient;
        // console.log(this.commandeClientDto);
      }
    });
  }

  printFactureCommandeClient(codeUser: string) {
    this.jasperReportService.printFactureClient(codeUser).subscribe({
      next: response => {
        if (response.statut) {
          window.open(response.directorieLong, '_blank');
        } else {
          console.log("Impossible d'imprimer")
          // ToastManagerService.toastSuccess(response.message);
        }
      },
      error: err => {
        console.log(err)
        // ToastManagerService.toastError(err.error.message);
      }
    });
  }

  exit() {
    history.back();
  }
}
