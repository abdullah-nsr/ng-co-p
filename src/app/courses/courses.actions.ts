import { createAction, props } from '@ngrx/store';
import { Course } from './model/course';


export const loadeAllCourses = createAction(
    "[ Courses Resolver ] load all courses"
)

export const allCoursesLoaded = createAction(
    "[ Load Courses Effect ] All Courses Loaded",
    props<{courses: Course[]}>()
)