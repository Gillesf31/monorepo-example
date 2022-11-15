import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemModel } from '@monorepo-example/app1/util';

@Component({
  selector: 'monorepo-example-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItemModel | null;
}
