import { Component, OnInit } from '@angular/core';
import { filtrosValidos } from '../../filter/filter.actions';
import { Store } from '@ngrx/store';

import { SetFiltroAction } from './../../filter/filter.actions';
import { Todo } from './../model/todo.model';
import { AppState } from '../../app.reducer';
import { CleanFiltroAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: filtrosValidos[] = ['todos', 'pendientes', 'completados'];
  filtroActual: filtrosValidos;
  pendientes: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
          this.filtroActual = state.filtro;
          this.contarPendientes( state.todo);

    });
  }

  cambiarFiltros(nuevoFiltro: filtrosValidos) {
    const accion = new SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes (todos: Todo[]) {
    this.pendientes = todos.filter( todo => !todo.completado).length;
  }

  limpiarCompletados() {
    const accion = new CleanFiltroAction();
    this.store.dispatch(accion);
  }

}
