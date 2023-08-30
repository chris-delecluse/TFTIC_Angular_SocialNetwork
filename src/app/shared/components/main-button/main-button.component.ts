import { Component, Input } from '@angular/core';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent {
  @Input()
  icon!: IconDefinition;

  @Input()
  text!: string;
}
