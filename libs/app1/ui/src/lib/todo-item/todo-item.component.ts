import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'monorepo-example-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
