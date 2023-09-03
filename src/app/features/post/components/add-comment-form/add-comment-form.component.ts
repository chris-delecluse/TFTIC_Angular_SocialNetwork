import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faComment, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommentFormModel } from "../../../../core/models/comment/Comment-form.model";

@Component({
  selector: 'app-add-comment-form',
  templateUrl: './add-comment-form.component.html',
  styleUrls: ['./add-comment-form.component.scss']
})
export class AddCommentFormComponent implements OnInit {
  protected readonly faComment: IconDefinition = faComment;

  form!: FormGroup;

  @Input()
  postId!: number;

  @Output()
  emitPostCommentOnClick$: EventEmitter<CommentFormModel> = new EventEmitter<CommentFormModel>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      comment: [null, [Validators.minLength(1)]]
    });
  }

  onClick = (): void => {
    this.emitPostCommentOnClick$.emit({ content: this.form.value.comment } as CommentFormModel);
    this.form.reset();
  }
}
