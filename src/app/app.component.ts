import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { AuthState } from './auth/reducers';
import { Action } from 'rxjs/internal/scheduler/Action';
import { isLogedin } from './auth/auth.selector';
import { AuthAction } from './auth/action-types';
import { json } from 'body-parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    loading = true;

    isLoggedin$: Observable<boolean>;
    isLoggedout$: Observable<boolean>;

    constructor(private router: Router, private store: Store<AuthState>) {

    }
    ngOnInit() {

      const userProfile = localStorage.getItem('user');
      if(userProfile) {
        this.store.dispatch(AuthAction.login({user: JSON.parse(userProfile)}))
      } 

      this.router.events.subscribe(event  => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      });
      
      // this.isLoggedin$ =  this.store
      //   .pipe(
      //     map(state => !!state['auth'].user)
      //   )
      // this.isLoggedout$ = this.store
      //     .pipe(
      //       map(state => !state["auth"].user)
      //     )
      this.isLoggedin$ = this.store
        .pipe(
          select(isLogedin)
        )
        console.log(this.isLoggedin$)
    }
    logout() {
      this.store.dispatch(AuthAction.logout());
      this.router.navigateByUrl('/login')
    }
}
