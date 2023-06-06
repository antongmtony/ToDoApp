import { Component, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Todo } from '../../interfaces/todo.interface'
import { InlineEditDirective } from 'src/app/shared/directives/inline-edit.directive';

@Component({
  selector: 'todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {

  @Input()
  public todos: Todo[] = [];

  @Output()
  todoUpdated = new EventEmitter<{ index: number; todo: Todo }>();

  @Output()
  todoDeleted = new EventEmitter<{ index: number; todo: Todo }>();

  @ViewChildren('descriptionEdit', { read: InlineEditDirective }) descriptionEdits!: QueryList<InlineEditDirective>;

  editDescriptionControl = new FormControl();

  constructor() {}

  editDescription(index: number): void {
    this.editDescriptionControl.setValue(this.todos[index].description);
    const editDirective = this.descriptionEdits.toArray()[index];
    editDirective.enableEditing();
    editDirective.selectInputText();
  }

  onEditEnd(index: number, newDescription: string): void {
    this.todos[index].description = newDescription;
    this.updateTodo(index);
  }

  updateTodo(index: number) {
    this.todoUpdated.emit({
      index,
      todo: this.todos[index]
    });
  }

  onCheckboxChange(index: number, todo: Todo, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    todo.completed = isChecked;
    this.updateTodo(index);
  }

  deleteTodo(index: number) {
    this.todoDeleted.emit({
      index,
      todo: this.todos[index]
    });
  }


}
