import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ClientService} from "../../client/service/client.service";
import {ClientDto} from "../../../../../gs-api/src/models/client-dto";
import {ArticleService} from "../../article/service/article.service";
import {ArticleDto} from "../../../../../gs-api/src/models/article-dto";
import {CommandeClientUpdate} from "../../../../../gs-api/src/models/commande-client-update";
import {CommandeClientDto, LigneCommandeClientDto} from "../../../../../gs-api/src/models";
import {CommandeClientService} from "../service/commande-client.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-nouvelle-commandeclient',
  templateUrl: './nouvelle-commandeclient.component.html',
  styleUrls: ['./nouvelle-commandeclient.component.scss']
})
export class NouvelleCommandeclientComponent implements OnInit{
  isSaveCommande: boolean = true;
  ClientListDto: ClientDto [] = [];
  articleListDto: ArticleDto [] = [];
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
    private route: Router
  ) {}

  saveCommandeForm = this.fb.group({
    client: [],
    designation: [''],
    code: [""],
    observation: [""]
  });

  ngOnInit(): void {
    this.findAllClient();
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

  onChangeQuantity(i: any, event: any, ligneInventaire: LigneCommandeClientDto) {
    if (event.target.value < 0){
      this.isSaveCommande = false;
      return;
    } else {
      this.isSaveCommande = true;
      this.commandeClientSelect.ligneCommandeClientDtoList![i].quantite = parseInt(event.target.value);
    }
  }

  onChangeObservation(i: any, event: any, ligneCommande: LigneCommandeClientDto) {
    this.commandeClientSelect.ligneCommandeClientDtoList![i].observation = event.target.value;
  }

  saveCommande(b: boolean) {
    this.commandeClientSelect.commandeClientDto = {
      client: this.saveCommandeForm.value.client ?? {},
      observation: this.saveCommandeForm.value.observation ?? undefined,
      etatCommande: b ? "LIVREE" : "VALIDEE"
    };
    this.commandeClientService.saveCommandeClient(this.commandeClientSelect).subscribe({
      next: res => this.route.navigateByUrl("member/commandesclients"),
      error: err => console.log(err)
    })
  }
}
