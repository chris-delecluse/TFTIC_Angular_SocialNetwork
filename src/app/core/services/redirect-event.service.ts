import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RedirectEventService {
  private subject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  emitAction = (message: string): void => {
    this.subject.next(message);
  }

  getActionObservable = (): Observable<string> => {
    return this.subject.asObservable();
  }
}
