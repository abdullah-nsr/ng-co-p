import { createAction, props } from '@ngrx/store';
import { Course } from './model/course';
import { Update } from '@ngrx/entity';


export const loadeAllCourses = createAction(
    "[ Courses Resolver ] load all courses"
)

export const allCoursesLoaded = createAction(
    "[ Load Courses Effect ] All Courses Loaded",
    props<{courses: Course[]}>()
)



// to emplement new fetucher start with action allways 

export const UpdateCourses = createAction(
    "[Edite Course Dialog] Courses Update",
    props<{update: Update<Course>}>()
);

// we use this Update from ngrx entity allow us to update part or all 
