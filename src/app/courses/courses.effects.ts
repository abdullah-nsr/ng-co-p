import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { CourseActions } from "./action.type";
import { concatMap, map } from "rxjs/operators";
import { CoursesHttpService } from "./services/courses-http.service";

@Injectable()
export class CoursesEffect {


    loadCourses$ = createEffect(
        () => this.actions$
        .pipe(
            ofType(CourseActions.loadeAllCourses),
            concatMap( action =>   
                this.coursesHttpService.findAllCourses()),
            map(courses => CourseActions.allCoursesLoaded({courses}))
        )
    )


    constructor(private actions$: Actions,
                private coursesHttpService: CoursesHttpService) {}

}