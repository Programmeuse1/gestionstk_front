import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NouvelleCommandeclientComponent} from "./nouvelle-commandeclient/nouvelle-commandeclient.component";
import {DetailCmdcltComponent} from "./detail-cmdclt/detail-cmdclt.component";
import {FormBuilder} from "@angular/forms";
import {Route, Router} from "@angular/router";
import {CommandeClientService} from "./service/commande-client.service";
import {CommandeClientDto} from "../../../../gs-api/src/models/commande-client-dto";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {JasperReportService} from "../../service/jasper-report.service";

@Component({
  selector: 'app-cmdclt',
  templateUrl: './cmdclt.component.html',
  styleUrls: ['./cmdclt.component.scss']
})
export class CmdcltComponent implements OnInit{

  commandeClientDtos: CommandeClientDto[] = [];

  searchForm = this.fb.group({
    nomClient: [null],
    phoneClient: [null],
    code: [null],
    actif: [null],
    nombreDeResultat: ["10"],
  });

  constructor(
    private ngbModal: NgbModal,
    private fb:FormBuilder,
    private router:Router,
    private commandeClientService: CommandeClientService,
    private jasperReportService: JasperReportService
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  openNouvelleCommandeClient(): void {
    this.router.navigate(['member/commandesclients/nouvelle_commande_client']).then();
  }

  openModalDetaille(commandeClientDto: CommandeClientDto): void {
    this.router.navigate(['member/commandesclients/detail', commandeClientDto.id]).then(()=>{});
  }

  modifierCommande(commandeClientDto: CommandeClientDto) {
    this.router.navigate(['member/commandesclients/update', commandeClientDto.id]).then(()=>{});
  }

  findAll(){
    this.commandeClientService.listCommandeClient({
      code: this.searchForm.value.code ?? undefined,
      actif: this.searchForm.value.actif ?? undefined,
      nomClient: this.searchForm.value.nomClient ?? undefined,
      phoneClient: this.searchForm.value.phoneClient ?? undefined,
      nombreDeResultat: this.searchForm.value.nombreDeResultat ?? "10"
    }).subscribe({
      next : res =>{
        this.commandeClientDtos = res
      },
      error: err => console.log(err)
    })
  }

  printFactureCommandeClient(codeCommande: string) {
    this.jasperReportService.printFactureClient(codeCommande).subscribe({
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
}
