import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toaster-message',
  templateUrl: './toaster-message.component.html',
  styleUrls: ['./toaster-message.component.scss']
})
export class ToasterMessageComponent implements OnInit {
  @Input()
  timer: number[] = [];

  @Input()
  message: string = '';

  isOpen: boolean = false;

  ngOnInit(): void {
    this.setIsOpen(true, this.timer[0]);
    this.setIsOpen(false, this.timer[1]);
  }

  private setIsOpen(b: boolean, number: number) {
    setTimeout(() => this.isOpen = b, number);
  }
}
