import { Route } from '@angular/router';
import { TodoComponent } from '@monorepo-example/app1/feature';

export const app1FeatureShellRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: TodoComponent },
];
