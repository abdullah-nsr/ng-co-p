import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { CourseActions } from "./action.type";
import { concatMap, map } from "rxjs/operators";
import { CoursesHttpService } from "./services/courses-http.service";
import { of } from "rxjs";

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
                // this will update on data base as well
    saveCoures$ = createEffect(
        () => this.actions$
        .pipe(
            ofType(CourseActions.UpdateCourses),
            concatMap(action => 
                this.coursesHttpService.saveCourse(
                    action.update.id,
                    action.update.changes
                )    
            ),
        ),
        {dispatch: false}
    )


    constructor(private actions$: Actions,
                private coursesHttpService: CoursesHttpService) {}

}