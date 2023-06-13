import {Component, OnInit} from '@angular/core';
import {UtilisateurDto} from "../../../../gs-api/src/models/utilisateur-dto";
import {UtilisateursService} from "../../pages/utilisateurs/service/utilisateurs.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  // currentUser: UtilisateurDto = {};
  //
  // constructor(
  //   private utilisateurService :UtilisateursService
  // ) { }
  //
  // ngOnInit(): void {
  //   this.getCurrentUser();
  // }
  //
  // getCurrentUser(){
  //   this.utilisateurService.currentUser().subscribe({
  //     next: value => {
  //       this.currentUser = value;
  //     error: err =>  console.log(value){
  //
  //     },
  //   })
  // }

}
