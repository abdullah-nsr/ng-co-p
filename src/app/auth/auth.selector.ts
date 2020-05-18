import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

const selectAuthState = createFeatureSelector<AuthState>("auth")
export const isLogedin = createSelector(
    selectAuthState,
    (auth) => !!auth.user
)

export const isLogedout = createSelector(
    isLogedin,
    (loggedin) => !loggedin
)