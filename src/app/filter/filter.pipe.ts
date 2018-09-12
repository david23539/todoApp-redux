import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './../todo/model/todo.model';
import { filtrosValidos } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    
    return todos;
  }

}
