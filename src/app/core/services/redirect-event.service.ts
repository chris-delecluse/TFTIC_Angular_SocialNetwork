import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RedirectEventService {
  private subject$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  emitAction = (message: string): void => {
    this.subject$.next(message);
  }
}
