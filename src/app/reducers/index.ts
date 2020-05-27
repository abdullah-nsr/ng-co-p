import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export function logger(reducer: ActionReducer<any>) 
  : ActionReducer<any>{
    return (state, action) => {
      console.log('state befor', state);
      console.log('action', action)
      return reducer(state, action)
    }
}

export const metaReducers: MetaReducer<AppState>[] = 
!environment.production ? [logger] : [];
