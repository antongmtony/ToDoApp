import { Component, Input } from '@angular/core';

import { Todo } from '../../interfaces/todo.interface'

@Component({
  selector: 'todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {

  @Input()
  public todos: Todo[] = [];


  constructor() {}

  editItem(event: MouseEvent, todo: Todo) {
    if (event.target) {
      const element = event.target as HTMLElement;
      element.setAttribute('contenteditable', 'true');
    }
  }

}
