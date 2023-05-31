import { Injectable } from '@angular/core';
import {AuthJwtService} from "./auth-jwt.service";
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserRouterAccessService {
  constructor(
    private authJwtService: AuthJwtService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authJwtService.isAuthentificated();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authJwtService.isAuthentificated();
  }
}
