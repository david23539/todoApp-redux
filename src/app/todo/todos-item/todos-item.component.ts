import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;

  chkFile: FormControl;
  txtFile: FormControl;
  constructor() { }

  ngOnInit() {
    this.chkFile = new FormControl(this.todo.completado);
    this.txtFile = new FormControl(this.todo.text, Validators.required);
    console.log(this.todo);
  }

}
