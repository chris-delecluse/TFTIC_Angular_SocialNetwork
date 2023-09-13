import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatMediatorService {

  $subject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  constructor() { }

  notifyIdChanged = (to: number): void => {
    this.$subject.next(to);
  }
}
