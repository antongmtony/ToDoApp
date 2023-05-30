import { Component } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent {

  public todos: Todo[] = [];

  constructor(

  ) {

  }


  

}
