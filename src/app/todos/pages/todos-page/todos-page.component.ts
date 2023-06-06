import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TodosServiceService } from '../../services/todos-service.service';
import { v4 as uuidv4 } from 'uuid'
import { FilterStatus } from '../../interfaces/filter-status.enum';

@Component({
  selector: 'todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  public todos: Todo[] = [];
  public description: string = '';
  public filterStatus = FilterStatus;
  public activeFilter: FilterStatus = FilterStatus.All;
  public isLoading: boolean = false;
  public total: number = 0;
  public totalPending: number = 0;

  constructor(
    private todosService: TodosServiceService
  ) {}

  ngOnInit(): void {
    this.getTodos(this.activeFilter);
  }

  sortTodosByCompleted(todos: Todo[]): Todo[] {
    return todos.sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1);
  }

  getTodos(status: FilterStatus): void {
    this.isLoading = true;
    this.todosService.getTodos().subscribe((data: Todo[]) => {
      this.todos = data;
      this.todos = this.sortTodosByCompleted(data);
      this.isLoading = false;
      this.activeFilter = status;

      this.updateTotals();

      if (status === FilterStatus.Pending) {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.activeFilter = status;
      } else if (status === FilterStatus.Completed) {
        this.activeFilter = status;
        this.todos = this.todos.filter(todo => todo.completed);
      }
    });
  }

  updateTotals(): void {
    this.total = this.todos.length;
    this.totalPending = this.todos.filter(todo => !todo.completed).length;
  }

  addTodo(): void {
    if (this.description.length > 0) {

      const newTodo: Todo = {
        'id': uuidv4(),
        'description': this.description,
        'completed': false
      }
      this.todosService.addTodo(newTodo).subscribe(
        (addedTodo: Todo) => {
          this.todos.unshift(addedTodo);
          this.updateTotals();
        });
      } else {
        return;
      }

    this.activeFilter = FilterStatus.All;
    this.description = '';
  }

  updateTodo(todoEvent: { index: number, todo: Todo}) {
    this.todosService.updateTodo(todoEvent.todo).subscribe(
      (updatedTodo: Todo) => {
        this.getTodos(this.activeFilter);
        this.todos = this.todos.map(todo => {
          return todo.id === updatedTodo.id ? updatedTodo : todo;
        })
        this.sortTodosByCompleted(this.todos);
      }
    )
  }


  deleteTodo(todoEvent: { index: number, todo: Todo }) {
    this.todosService.deleteTodo(todoEvent.todo).subscribe(
      (deletedTodo: Todo) => {
        this.getTodos(this.activeFilter);
        this.todos = this.todos.filter(todo => {
          return todo.id !== deletedTodo.id;
        })
        this.sortTodosByCompleted(this.todos);
      }
    )
  }



}
