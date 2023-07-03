import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ClientService} from "../../client/service/client.service";
import {ClientDto} from "../../../../../gs-api/src/models/client-dto";
import {ArticleService} from "../../article/service/article.service";
import {ArticleDto} from "../../../../../gs-api/src/models/article-dto";
import {CommandeClientUpdate} from "../../../../../gs-api/src/models/commande-client-update";
import {CommandeClientDto, LigneCommandeClientDto} from "../../../../../gs-api/src/models";
import {CommandeClientService} from "../service/commande-client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {JasperReportService} from "../../../service/jasper-report.service";

@Component({
  selector: 'app-nouvelle-commandeclient',
  templateUrl: './nouvelle-commandeclient.component.html',
  styleUrls: ['./nouvelle-commandeclient.component.scss']
})
export class NouvelleCommandeclientComponent implements OnInit{
  isSaveCommande: boolean = true;
  ClientListDto: ClientDto [] = [];
  ClientDTO1: ClientDto  = {};

  articleListDto: ArticleDto [] = [];
  commandeClientDto: CommandeClientDto = {};
  commandeClientDispo: CommandeClientUpdate = {
    ligneCommandeClientDtoList: []
  };
  commandeClientSelect: CommandeClientUpdate = {
    ligneCommandeClientDtoList: []
  };

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private articleService: ArticleService,
    private commandeClientService: CommandeClientService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private jasperReportService: JasperReportService
  ) {}

  saveCommandeForm = this.fb.group({
    client: [null, Validators.required],
    designation: [''],
    code: [""],
    observation: [""]
  });

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commandeClient}) => {
      if (commandeClient) {
        this.commandeClientDto = commandeClient;
      }
    });

    this.findAllClient();

    if (this.commandeClientDto.id != null){
      this.updateCommandeClientForm(this.commandeClientDto)
    }
  }

  private updateCommandeClientForm(commandeClientDto: CommandeClientDto) {
    this.updateArticle();
    this.saveCommandeForm?.get(['client'])?.setValue(commandeClientDto.client?.nom);
    this.saveCommandeForm?.get(['observation'])?.setValue(commandeClientDto.observation);
    this.commandeClientSelect.commandeClientDto!.client = commandeClientDto.client;
  }

  private updateArticle(){
    this.commandeClientSelect.ligneCommandeClientDtoList = this.commandeClientDto?.ligneCommandeClients!;
    this.commandeClientSelect.commandeClientDto = this.commandeClientDto;
    this.findAllArticle();
  }

  findAllClient(){
    this.clientService.findClientAll().subscribe({
      next: response => {
        this.ClientListDto = response;
      },
      error: err => console.log(err)
    })
  }

  private makeCommandeClientUpdateWithArtice(articleListDto: ArticleDto[]): LigneCommandeClientDto[] {
    let ligneCommandeClientList: LigneCommandeClientDto[] = [];

    articleListDto.forEach(article => {
      // Vérifier si l'article n'est pas déjà présent dans commandeClientSelect.ligneCommandeClientDtoList
      const isArticlePresent = this.commandeClientSelect.ligneCommandeClientDtoList!.some(existingLigne => {
        return existingLigne.article!.id === article.id;
      });

      // Ajouter la ligne de commande seulement si l'article n'est pas déjà présent
      if (!isArticlePresent) {
        let ligneCommandeClient: LigneCommandeClientDto = {
          article: article,
        };
        ligneCommandeClientList.push(ligneCommandeClient);
      }
    });

    return ligneCommandeClientList;
  }


  findAllArticle(){
    this.articleService.findArticleAll().subscribe({
      next: res => {
        this.commandeClientDispo.ligneCommandeClientDtoList = this.makeCommandeClientUpdateWithArtice(res);
      }
    })
  }

  findArticleByCriteria() {
    this.articleService.listingArtcile({
      designation: this.saveCommandeForm.get("designation")!.value ?? undefined,
      code: this.saveCommandeForm.get('code')!.value ?? undefined
    }).subscribe({
      next: res => {
        this.commandeClientDispo.ligneCommandeClientDtoList = this.makeCommandeClientUpdateWithArtice(res);
      }, error: err => console.log(err)
    })
  }

  exit() {
    history.back();
  }

  clientSelect(event: ClientDto) {
    if (event !== undefined){
      this.findAllArticle();
      this.ClientDTO1 = event;
    } else {
      this.articleListDto = [];
    }
  }

  onClearable() {
    this.commandeClientSelect.ligneCommandeClientDtoList = [];
    this.commandeClientDispo.ligneCommandeClientDtoList = [];
  }

  OnSelectAllArticle() {
    for (const item of this.commandeClientDispo.ligneCommandeClientDtoList!){
      this.commandeClientSelect.ligneCommandeClientDtoList!.push(item)
    }
    this.commandeClientDispo.ligneCommandeClientDtoList!.splice(0, this.commandeClientDispo.ligneCommandeClientDtoList!.length);
  }

  OnDeleteAllArticle() {
    for (const item of this.commandeClientSelect.ligneCommandeClientDtoList!){
      this.commandeClientDispo.ligneCommandeClientDtoList!.push(item)
    }
    this.commandeClientSelect.ligneCommandeClientDtoList!.splice(0, this.commandeClientSelect.ligneCommandeClientDtoList!.length);
  }

  OnSelectArticle(i: any) {
    if (this.commandeClientSelect && this.commandeClientDispo.ligneCommandeClientDtoList && this.commandeClientDispo.ligneCommandeClientDtoList[i]) {
      this.commandeClientSelect.ligneCommandeClientDtoList!.push(this.commandeClientDispo.ligneCommandeClientDtoList[i]);
    }

    const index: number = this.commandeClientDispo.ligneCommandeClientDtoList!.indexOf(this.commandeClientDispo.ligneCommandeClientDtoList![i]);
    if (index !== -1){
      this.commandeClientDispo.ligneCommandeClientDtoList!.splice(index,1);
    }
  }

  OnRemoveAricle(i: any) {
    if (this.commandeClientDispo && this.commandeClientSelect.ligneCommandeClientDtoList && this.commandeClientSelect.ligneCommandeClientDtoList[i]) {
      this.commandeClientDispo.ligneCommandeClientDtoList!.push(this.commandeClientSelect.ligneCommandeClientDtoList![i]);
    }
    const index: number = this.commandeClientSelect.ligneCommandeClientDtoList!.indexOf(this.commandeClientSelect.ligneCommandeClientDtoList![i]);
    if (index !== -1){
      this.commandeClientSelect.ligneCommandeClientDtoList!.splice(index,1);
    }
  }

  onChangeQuantity(i: any, event: any) {
    if (event.target.value < 0){
      this.isSaveCommande = false;
      return;
    } else {
      this.isSaveCommande = true;
      this.commandeClientSelect.ligneCommandeClientDtoList![i].quantite = parseInt(event.target.value);
    }
  }

  onChangeObservation(i: any, event: any) {
    this.commandeClientSelect.ligneCommandeClientDtoList![i].observation = event.target.value;
  }

  saveCommande(b: boolean) {

    this.commandeClientSelect.commandeClientDto = {
      observation: this.saveCommandeForm.value.observation ?? "",
      etatCommande: b ? "LIVREE" : "VALIDEE",
      client: this.ClientDTO1
    };

    this.commandeClientService.saveCommandeClient(this.commandeClientSelect).subscribe({
      next: (res) => {
        if (b){
          this.printFactureCommandeClient(res.code!);
        }
          this.route.navigateByUrl("member/commandesclients");
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
