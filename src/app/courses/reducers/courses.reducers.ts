import { Course } from "../model/course";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action.type";


export interface CourseseState extends EntityState<Course>  {
//  obvious way to store 
//  courses: Course[]
//  most powerfull way to store to store intiteies but .
// entities: {[key: number]: Course},
// eid: number
// but ngrx brovied this entities proberty
// we will get this reseult  let state: CourseseState; state.entities; state.ids;

}

export const adapter = createEntityAdapter<Course>();

export const initialCoursesState = adapter.getInitialState()

export const coursesReducer = createReducer(
    initialCoursesState,
    on(CourseActions.allCoursesLoaded,
         (state, action) => adapter.addAll(action.courses, state)) 
)