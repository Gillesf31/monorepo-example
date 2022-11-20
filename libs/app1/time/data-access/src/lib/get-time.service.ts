import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class GetTimeService {
  getCurrentTime(): Observable<string> {
    return of(new Date().toISOString());
  }
}
