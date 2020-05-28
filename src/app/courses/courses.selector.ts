import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CourseseState } from "./reducers/courses.reducers";
import * as fromCourses from "./reducers/courses.reducers"
import { allCoursesLoaded } from "./courses.actions";

export const selecteCoursesState = createFeatureSelector<CourseseState>("courses");
// old way because we can use our adapter
export const selectAllCourses = createSelector(
    selecteCoursesState,
//     (courses) => { courses.entities }
    fromCourses.selectAll
)

export const selectbeginnerCourses$ = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.category == 'BEGINNER')
)

export const selectadvancedCourses$ = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.category == 'ADVANCED')
)

export const selectpromoTotal$ = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.promo).length
)


export const areCoursesLoaded$ = createSelector(
    selecteCoursesState,
    state => state.allCoursesLoaded
)