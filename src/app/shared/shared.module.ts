import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { InlineEditDirective } from './directives/inline-edit.directive';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    InlineEditDirective,
  ],
  exports: [
    LoadingSpinnerComponent,
    InlineEditDirective,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
