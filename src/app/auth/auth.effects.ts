import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { AuthAction } from "./action-types";
import { tap } from "rxjs/operators";
import { Route, Router } from "@angular/router";


@Injectable()

export class AuthEffects {

    login$ = createEffect(() => 
        this.actions$.pipe(
            ofType(AuthAction.login),
            tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
        ),
        {dispatch: false}
    );
    logout$ = createEffect(() => 
        this.actions$.pipe(
            ofType(AuthAction.logout),
            tap( action => {
                localStorage.removeItem('user');
            } 
      
            )
        ),
        {dispatch: false}
    )
    constructor(private actions$: Actions, private router: Router) {
        // const logout = this.actions$.pipe(
        //     ofType(AuthAction.logout),
        //     tap(res => {
        //         localStorage.removeItem('user');
        //     })
        // )
        // actions$.subscribe(
        //     res => {
        //         if(res.type = "[login page] User Login") {
        //             localStorage.setItem("user", JSON.stringify(res['user']))
        //         }
        //     }
        // )
    }

}