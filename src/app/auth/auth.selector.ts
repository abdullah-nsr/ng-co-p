import { createSelector } from "@ngrx/store";


export const isLogedin = createSelector(
    (state) => state["auth"],
    (auth) => !!auth.user
)