import { filtrosValidos, acciones, SET_FILTRO } from './filter.actions';


const estadoInicial: filtrosValidos = 'todos';

export function filtroReducer ( state = estadoInicial, accion: acciones): filtrosValidos {


    switch(accion.type) {

        case SET_FILTRO:
            return accion.filtro;

        default:
            return state;
    }
}