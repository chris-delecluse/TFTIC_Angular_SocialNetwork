import { Component, Input } from '@angular/core';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-absolut-icon',
  templateUrl: './absolut-icon.component.html',
  styleUrls: ['./absolut-icon.component.scss']
})
export class AbsolutIconComponent {
  @Input()
  icon!: IconDefinition;

  @Input()
  top ?: string;

  @Input()
  left ?: string;

  @Input()
  right?: string;

  @Input()
  bottom?: string;
}
