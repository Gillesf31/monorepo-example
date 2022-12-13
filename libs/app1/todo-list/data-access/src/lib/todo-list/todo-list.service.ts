import {Injectable} from '@angular/core';
import {App1TodoListDataAccessModule} from '../app1-todo-list-data-access.module';
import {map, Observable, of, tap} from 'rxjs';
import {TodoItemModel} from '@monorepo-example/app1/todo-list/util';
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: App1TodoListDataAccessModule})
export class TodoListService {
  constructor(private readonly http: HttpClient) {
  }

  getTodoList(): Observable<TodoItemModel[]> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/1/todos')
      .pipe(
        tap(console.warn),
        map(todoList =>
          todoList.map((todoItem: { id: any; title: any; completed: any; }) => ({
              id: todoItem.id,
              title: todoItem.title,
              done: todoItem.completed
            } as TodoItemModel))
        )
      );
  }
}
