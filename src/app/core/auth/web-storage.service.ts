import { Injectable } from '@angular/core';
import {LocalStorageService, SessionStorageService} from "ngx-webstorage";


@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor(
    private $localStorage: LocalStorageService,
    private $sessionsStorage: SessionStorageService
  ) { }

  storeToken(token?: string, remember?: boolean): void {
    if (remember){
      this.$localStorage.store("access_token", token);
    } else {
      this.$sessionsStorage.store("access_token", token);
    }
  }

  getLanguage(): string {
    return localStorage.getItem('language') ?? 'fr';
  }

  getToken(): string {
    if (this.$sessionsStorage.retrieve("access_token")) {
      return this.$sessionsStorage.retrieve("access_token");
    }
    else {
      return this.$localStorage.retrieve("access_token");
    }
  }

  clearToken(): void {
    this.$sessionsStorage.clear("access_token");
    this.$localStorage.clear("access_token");
  }

  setCurrentUser(current_user?: string): void {
    this.$localStorage.store("access_current_user", current_user);
  }

  getCurrentUser(): string {
    return this.$localStorage.retrieve("access_current_user");
  }
}
