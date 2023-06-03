import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TodosServiceService } from '../../services/todos-service.service';

@Component({
  selector: 'todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  public todos: Todo[] = [];
  public title: string = '';
  public description: string = '';

  constructor(
    private todosService: TodosServiceService
  ) {

  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todosService.getTodos().subscribe(
      (data: Todo[]) => {
        this.todos = data;
      }
    )
  }

  addTodo(): void {
    console.log(this.title)
    console.log(this.description)
    const newTodo: Todo = {
      'title': this.title,
      'description': this.description,
      'completed': false
    }
    this.todosService.addTodo(newTodo).subscribe(
      (addedTodo: Todo) => {
        this.todos.push(addedTodo);
      }
    )

  }

}
