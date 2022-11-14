import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from '@monorepo-example/app1/ui';
import {
  TodoItemModel,
  TodoListService,
} from '@monorepo-example/app1/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'monorepo-example-todo',
  standalone: true,
  imports: [CommonModule, TodoListComponent],
  providers: [TodoListService],
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  todoList$!: Observable<TodoItemModel[]>;

  constructor(private readonly todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoList$ = this.todoListService.getTodoList();
  }
}
