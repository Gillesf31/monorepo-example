import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@monorepo-example/app1/feature-shell').then(
        (m) => m.App1TodoListFeatureShellModule
      ),
  },
];
