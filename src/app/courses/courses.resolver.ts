import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppState } from './../reducers/index'
import { tap, first, finalize, filter } from "rxjs/operators";
import { loadeAllCourses } from "./courses.actions";
import { areCoursesLoaded$ } from "./courses.selector";


@Injectable()
export class CoursesResolver implements Resolve<any> {

    isLoading= false;

    constructor(private store: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ) : Observable<any> {
            // we need to check the store for corses if true we dispatch action loadeAllCourses 
            // if not we need to dospatch allCoursesLoaded 
            // as side effect we need to wie tap and dispatch loadeAllCourses 
            // try to use pipe without select to see what this will return and the effect on the resolver
            return this.store
            .pipe(
                select(areCoursesLoaded$),
                tap((areCoursesLoaded) => {
                    if(!this.isLoading && !areCoursesLoaded) {
                        this.isLoading = true;
                        this.store.dispatch(loadeAllCourses())
                    }
                }),
                // using filter to return boolean value to navigate to coureses view
                filter(areCoursesLoaded => areCoursesLoaded),
                first(),
                finalize(() => this.isLoading = false)
            );
    }
} 