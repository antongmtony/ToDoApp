import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosTableComponent } from './todos-table.component';

describe('TodosTableComponent', () => {
  let component: TodosTableComponent;
  let fixture: ComponentFixture<TodosTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosTableComponent]
    });
    fixture = TestBed.createComponent(TodosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
