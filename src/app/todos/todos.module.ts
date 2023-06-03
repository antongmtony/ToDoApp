import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosFilterComponent } from './components/todos-filter/todos-filter.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { TodosFormComponent } from './components/todos-form/todos-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodosListComponent,
    TodosFilterComponent,
    TodosPageComponent,
    TodosFormComponent
  ],
  exports: [
    TodosPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class TodosModule { }
