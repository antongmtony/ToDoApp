import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TodosModule } from '../todos/todos.module';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    HomePageComponent
  ],
  exports: [
    LoadingSpinnerComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    TodosModule
  ]
})
export class SharedModule { }
