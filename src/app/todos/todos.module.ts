import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TodosListComponent,
    TodosPageComponent,
  ],
  exports: [
    TodosPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
})
export class TodosModule { }
