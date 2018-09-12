import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filtroReducer } from './filter/filter.reducer';
import { filtrosValidos } from './filter/filter.actions';

export interface AppState {
    todo: Todo[];
    filtro: filtrosValidos;
}

export const reducers: ActionReducerMap<AppState> = {
    todo:  todoReducer,
    filtro: filtroReducer
};
 