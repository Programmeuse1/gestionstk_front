import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "./account.service";
import {WebStorageService} from "./web-storage.service";
import {Observable} from "rxjs";
import {map} from "rxjs";
import {AuthApiService} from "../../../gs-api/src/services/auth-api.service";
import {AuthenticationRequest} from "../../../gs-api/src/models/authentication-request";
import {AuthenticationResponse} from "../../../gs-api/src/models/authentication-response";

@Injectable({
  providedIn: 'root'
})
export class AuthJwtService {

  constructor(
    private webStorageService: WebStorageService,
    private router: Router,
    private accountService: AccountService,
    private authenticationService: AuthApiService,
  ) { }

  login(authentificationRequest: AuthenticationRequest): Observable<void> {
    return this.authenticationService.authenticate(authentificationRequest)
      .pipe(map(response => this.authenficationSuccess(response)));
  }

  private authenficationSuccess(authentificationResponse: AuthenticationResponse): void {
    this.accountService.identity(true);
    console.log("storeToken");
    console.log(authentificationResponse.accessToken);
    this.webStorageService.storeToken(authentificationResponse.accessToken, true);
  }

  isAuthentificated(): boolean{
    console.log("isAuthentificated");
    console.log(this.webStorageService.getToken());
    if (this.webStorageService.getToken()){
      return true;
    }
    this.router.navigate(['login']).then(() => {});
    return false;
  }

  logout(): void {
    this.router.navigate(['login']).then(() => {});
    this.webStorageService.clearToken();

  }

  logoutWithoutObserver(): void {
    this.webStorageService.clearToken();
    this.accountService.authenticate(null);
    this.router.navigate(['login']).then(() => {});
  }
}
