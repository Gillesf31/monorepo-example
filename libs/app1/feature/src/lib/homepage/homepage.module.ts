import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedDataAccessCatStatusModule } from '@monorepo-example/shared/data-access-cat-status';
import { ButtonModule } from '@monorepo-example/shared/ui-button';
import { HomepageComponent } from './homepage.component';

@NgModule({
  imports: [CommonModule, ButtonModule, SharedDataAccessCatStatusModule
],
declarations: [HomepageComponent],
  exports: [HomepageComponent],
})
export class Homepagemodule {}
