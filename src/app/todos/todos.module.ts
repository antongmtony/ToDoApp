import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosTableComponent } from './components/todos-table/todos-table.component';
import { TodosFilterComponent } from './components/todos-filter/todos-filter.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { DeleteTodoComponent } from './components/delete-todo/delete-todo.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';



@NgModule({
  declarations: [
    TodosTableComponent,
    TodosFilterComponent,
    NewTodoComponent,
    DeleteTodoComponent,
    TodosPageComponent
  ],
  exports: [
    TodosPageComponent
  ],
  imports: [
    CommonModule
  ],
})
export class TodosModule { }
