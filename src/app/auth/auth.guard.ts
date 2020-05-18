import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store"
import { AuthState } from "./reducers";
import { isLogedin } from "./auth.selector";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthGuard implements  CanActivate {
    constructor(private store: Store<AuthState>,private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) : Observable<boolean> {
        return this.store.pipe(
            select(isLogedin),
            tap(loggedIn => {
                if(!loggedIn) {
                    this.router.navigateByUrl("/login")
                }
            }),
        )  
    }
}