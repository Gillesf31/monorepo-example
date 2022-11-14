import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { app1FeatureShellRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(app1FeatureShellRoutes)],
})
export class App1FeatureShellModule {}
