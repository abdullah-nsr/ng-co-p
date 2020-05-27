import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from './../reducers/index'
import { tap, first, finalize } from "rxjs/operators";
import { loadeAllCourses } from "./courses.actions";


@Injectable()
export class CoursesResolver implements Resolve<any> {

    isLoading= false;

    constructor(private store: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ) : Observable<any> {
            // we need to check the store for corses if true we dispatch action loadeAllCourses 
            // if not we need to dospatch allCoursesLoaded 
            // as side effect we need to wie tap and dispatch loadeAllCourses 
            return this.store
            .pipe(
                tap(() => {
                    if(!this.isLoading) {
                        this.isLoading = true;
                        this.store.dispatch(loadeAllCourses())
                    }
                }),
                first(),
                finalize(() => this.isLoading = false)
            );
    }
} 