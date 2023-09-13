import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMessage, faPaperPlane, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { MessageFormModel } from "../../../../core/models/chat/Message-form.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.scss']
})
export class SendMessageFormComponent implements OnInit {

  protected readonly faPaperPlane: IconDefinition = faPaperPlane;
  protected readonly faMessage: IconDefinition = faMessage;

  form!: FormGroup;

  @Input()
  currentUserId!: number;

  @Input()
  messageTo!: number;

  @Output()
  $emitSendMessageOnClick: EventEmitter<MessageFormModel> = new EventEmitter<MessageFormModel>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      message: [null, [Validators.required, Validators.minLength(1)]]
    })
  }

  onSubmit = () => {
    this.$emitSendMessageOnClick.emit({
      from: this.currentUserId,
      to: this.messageTo,
      content: this.form.value.message
    });

    this.form.reset();
  }
}
