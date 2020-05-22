import { createAction, props } from '@ngrx/store';
import { Course } from './model/course';


export const login = createAction(
    "[ Courses Resolver ] load all courses"
)

export const logout = createAction(
    "[ Load Courses Effect ] All Courses Loaded",
    props<{courses: Course[]}>()
)