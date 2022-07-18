import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@monorepo-example/app1/feature').then(m => m.App1FeatureModule)
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})

export class App1FeatureShellModule {
}
