import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Todo } from '../interfaces/todo.interface';


@Injectable({
  providedIn: 'root'
})
export class TodosServiceService implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todos', todo);
  }

  completeTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>('http://localhost:3000/todos/' + todo.id, todo )
  }
}
