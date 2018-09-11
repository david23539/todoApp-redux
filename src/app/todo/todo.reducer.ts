import { Acciones, AGREGAR_TODO } from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Pedir el traje de aironMan');
const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: Acciones): Todo[]{

    switch(action.type) {
        case AGREGAR_TODO:

            const todo = new Todo(action.texto);
            return [ ...state, todo];

        default:
            return state;
    }
}