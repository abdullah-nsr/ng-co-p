import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
} from '@ngrx/store';
import { on } from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthAction } from '../action-types';
// import { userInfo } from 'os';

// import { environment } from '../../environments/environment';

export interface AuthState {
    user: User
}

export const initialAuthState :AuthState = {
  user: undefined
}

// export const reducers: ActionReducerMap<AuthState> = {

// };

export const authReducer = createReducer(
  initialAuthState,
  on(AuthAction.login, (state, action) => {
    return {
      user: action.user
    }
  }),
  on(AuthAction.logout, (state, action) => {
    return {
      user: undefined
    }
  })
)

//  export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
