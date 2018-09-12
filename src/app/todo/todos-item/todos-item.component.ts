import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import { ToggleTodoAction, EditarTodoAction } from '../todo.actions';
import { BorrarTodoAction } from './../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;
  editando: boolean;

  chkFile: FormControl;
  txtFile: FormControl;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkFile = new FormControl(this.todo.completado);
    this.txtFile = new FormControl(this.todo.text, Validators.required);
    this.chkFile.valueChanges.subscribe(
      () => {
        const accion = new ToggleTodoAction(this.todo.id);
        this.store.dispatch(accion);
      }
    )
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminaredicion() {
    this.editando = false;
    if (this.txtFile.value) {
      const accion = new EditarTodoAction(this.todo.id, this.txtFile.value);
      this.store.dispatch(accion);
    }
  }

  borrarTodo(){
    const action = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(action);
    
  }

}
