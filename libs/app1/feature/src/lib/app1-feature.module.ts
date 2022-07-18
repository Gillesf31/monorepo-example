import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Homepagemodule } from './homepage/homepage.module';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [CommonModule, Homepagemodule, RouterModule.forChild([
    { path: 'home', component: HomepageComponent },
    { path: '**', redirectTo: 'home' }
  ])],
})
export class App1FeatureModule {
}
