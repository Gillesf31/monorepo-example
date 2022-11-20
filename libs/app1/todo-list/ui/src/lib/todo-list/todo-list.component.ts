import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItemModel } from '@monorepo-example/app1/todo-list/util';

@Component({
  selector: 'monorepo-example-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  @Input() todoList!: TodoItemModel[] | null;
}
