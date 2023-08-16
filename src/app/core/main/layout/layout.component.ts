import { Component, OnInit } from '@angular/core';
import { RedirectEventService } from "../../services/redirect-event.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  message!: string;

  constructor(
    private _redirectEventService: RedirectEventService
  ) {}

  ngOnInit(): void {
    this._redirectEventService.getActionObservable().subscribe((val: string) => this.message = val);
  }
}
