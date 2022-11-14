import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'monorepo-example-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
