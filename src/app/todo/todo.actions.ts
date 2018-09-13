
import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agrefar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle ALL todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const CLEAR_COMPLETE_TODO = '[Todo] Limpiar completados';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto: string) {}
}

export class CleanFiltroAction implements Action {
    readonly type = CLEAR_COMPLETE_TODO;
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;
    constructor(public completado: boolean) {}
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;
    constructor(public id: number) {}
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor(public id: number, public text: string) {}
}
export type Acciones = AgregarTodoAction | ToggleTodoAction | EditarTodoAction | BorrarTodoAction | ToggleAllTodoAction | CleanFiltroAction;
