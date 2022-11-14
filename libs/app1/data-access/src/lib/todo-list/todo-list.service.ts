import { Injectable } from '@angular/core';
import { App1DataAccessModule } from '../app1-data-access.module';
import { Observable, of } from 'rxjs';
import { TodoItemModel } from '../models/todo-list.model';

@Injectable({ providedIn: App1DataAccessModule })
export class TodoListService {
  getTodoList(): Observable<TodoItemModel[]> {
    return of([
      { id: 1, title: 'Todo 1' },
      { id: 2, title: 'Todo 2' },
      { id: 3, title: 'Todo 3' },
    ]);
  }
}
