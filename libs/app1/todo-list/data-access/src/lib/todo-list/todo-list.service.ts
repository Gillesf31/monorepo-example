import { Injectable } from '@angular/core';
import { App1TodoListDataAccessModule } from '../app1-todo-list-data-access.module';
import { Observable, of } from 'rxjs';
import { TodoItemModel } from '@monorepo-example/app1/todo-list/util';

@Injectable({ providedIn: App1TodoListDataAccessModule })
export class TodoListService {
  getTodoList(): Observable<TodoItemModel[]> {
    return of([
      { id: 1, title: 'Todo 1', done: true },
      { id: 2, title: 'Todo 2', done: false },
      { id: 3, title: 'Todo 3', done: true },
    ]);
  }
}
