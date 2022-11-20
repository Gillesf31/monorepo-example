import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTimeService } from './get-time.service';

@NgModule({
  imports: [CommonModule],
  providers: [GetTimeService],
})
export class App1TimeDataAccessModule {}
