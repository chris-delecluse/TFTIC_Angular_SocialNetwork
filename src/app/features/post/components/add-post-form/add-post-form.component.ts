import { Component, OnInit } from '@angular/core';
import { faMessage, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { PostService } from "../../../../core/services/post.service";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";
import { PostFormModel } from "../../../../core/models/post/Post-form.model";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss']
})
export class AddPostFormComponent implements OnInit {

  protected readonly faMessage: IconDefinition = faMessage;

  postForm!: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    private _postService: PostService) {}

  ngOnInit(): void {
    this.postForm = this._formBuilder.group({
      postContent: [null, []]
    });
  }

  onSubmit = (): void => {
    this._postService.addPost({ content: this.postForm.value.postContent } as PostFormModel).subscribe({
      next: (response: ApiResponseModel<string>) => {
        this.postForm.reset();
      }
    })
  }
}
