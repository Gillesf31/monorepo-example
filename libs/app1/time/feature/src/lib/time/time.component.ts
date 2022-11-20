import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTimeService } from '@monorepo-example/app1/time/data-access';
import { map, Observable } from 'rxjs';
import { FormatTimeService } from '@monorepo-example/app1/time/util';

@Component({
  selector: 'monorepo-example-time',
  standalone: true,
  imports: [CommonModule],
  providers: [GetTimeService],
  templateUrl: './time.component.html',
})
export class TimeComponent implements OnInit {
  currentTime$: Observable<string> | undefined;
  constructor(private readonly getTimeService: GetTimeService) {}

  ngOnInit(): void {
    this.currentTime$ = this.getTimeService
      .getCurrentTime()
      .pipe(map((time) => FormatTimeService.formatTime(time)));
  }
}
