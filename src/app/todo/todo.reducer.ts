import { Acciones, AGREGAR_TODO, TOGGLE_TODO, EDITAR_TODO, BORRAR_TODO, TOGGLE_ALL_TODO, CLEAR_COMPLETE_TODO } from './todo.actions';
import { Todo } from './model/todo.model';


const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Pedir el traje de aironMan');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];



export function todoReducer(state = estadoInicial, action: Acciones): Todo[] {

    switch (action.type) {
        case AGREGAR_TODO:

            const todo = new Todo(action.texto);
            return [ ...state, todo];

        case TOGGLE_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });

        case TOGGLE_ALL_TODO:
            return state.map( todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.completado
                };
            });

        case EDITAR_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        text : action.text
                    };
                } else {
                    return todoEdit;
                }
            });

        case BORRAR_TODO:
            return state.filter(todoEdit => todoEdit.id !== action.id);

        case CLEAR_COMPLETE_TODO:
            return state.filter(todoEdit => !todoEdit.completado);

        default:
            return state;
    }
}
