import { Route } from '@angular/router';
import { TodoComponent } from '@monorepo-example/app1/todo-list/feature';
import { TimeComponent } from '@monorepo-example/app1/time/feature';

export const app1FeatureShellRoutes: Route[] = [
  { path: '', component: TodoComponent },
  { path: 'time', component: TimeComponent },
];
