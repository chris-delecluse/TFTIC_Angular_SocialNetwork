import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './app-page-title.component.html',
  styleUrls: ['./app-page-title.component.scss']
})
export class AppPageTitleComponent {
  @Input()
  title !: string;
}
