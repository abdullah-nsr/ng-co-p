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

export interface State {

}

export const reducers: ActionReducerMap<State> = {
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

export const metaReducers: MetaReducer<State>[] = 
!environment.production ? [logger] : [];
