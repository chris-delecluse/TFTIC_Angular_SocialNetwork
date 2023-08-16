import { Component, Input } from '@angular/core';
import { faCircleExclamation, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent {
  protected readonly faCircleExclamation: IconDefinition = faCircleExclamation;

  @Input()
  errorMessage: string = '';
}
