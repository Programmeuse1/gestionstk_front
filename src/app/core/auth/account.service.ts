import {Injectable} from "@angular/core";
import {UtilisateurDto} from "../../../gs-api/src/models/utilisateur-dto";
// import {BehaviorSubject, catchError, Observable, ReplaySubject, shareReplay} from "rxjs/dist/types";
import {UtilisateurApiService} from "../../../gs-api/src/services/utilisateur-api.service";
import {BehaviorSubject, catchError, Observable, of, ReplaySubject, shareReplay, tap} from "rxjs";
import {RolesDto} from "../../../gs-api/src/models/roles-dto";
// import {of} from "rxjs/dist/types/internal/observable/of";
// import {tap} from "rxjs/dist/types/internal/operators/tap";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userIdentity: UtilisateurDto | null =  null;
  private authenticationState = new ReplaySubject<UtilisateurDto | null>(1);
  private accountCache$?: Observable<UtilisateurDto | null>;
  private currentUserSubject = new BehaviorSubject<UtilisateurDto | null>({});

  constructor(
    private userService: UtilisateurApiService
  ) { }

  getCurrentUser(): Observable<UtilisateurDto> {
    return this.userService.currentUser();
  }

  hasAnyAuthority(authorities: string[] | string | undefined): boolean {
    if (!this.userIdentity || !this.userIdentity.roles){
      return false;
    }
    if (!Array.isArray(authorities)) {
      authorities = [authorities ?? ''];
    }
    return this.userIdentity.roles.some((authority: RolesDto) => authorities?.includes(authority.roleName ?? ''));
  }

  identity(force?: boolean): Observable<UtilisateurDto | null> {
    if (!this.accountCache$ || force || !this.isAuthenticated()) {
      this.accountCache$ = this.getCurrentUser().pipe(
        catchError(() => of(null)),
        tap((account: UtilisateurDto | null) => {
          this.authenticate(account);
        }),
        shareReplay()
      );
    }
    return this.accountCache$;
  }

  authenticate(identity: UtilisateurDto | null): void {
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
    this.currentUserSubject.next(this.userIdentity);
  }

  isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }

  getAuthenticationState(): Observable<UtilisateurDto | null> {
    return this.authenticationState.asObservable();
  }


}
