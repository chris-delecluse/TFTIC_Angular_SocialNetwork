import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-title',
  templateUrl: './mobile-title.component.html',
  styleUrls: ['./mobile-title.component.scss']
})
export class MobileTitleComponent {
  @Input()
  title!: string;
}
