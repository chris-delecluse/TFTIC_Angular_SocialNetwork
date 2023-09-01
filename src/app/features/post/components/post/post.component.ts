import { Component, Input, OnInit } from '@angular/core';
import { PostResponseModel } from "../../../../core/models/post/Post-response.model";
import { CommentResponseModel } from "../../../../core/models/comment/Comment-response.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  post !: PostResponseModel;

  @Input()
  comment !: CommentResponseModel[];



  ngOnInit(): void {
   // this.truncateContent();
  }

  displayedContent!: string;
  isContentTruncated: boolean = false;

  truncateContent() {
    if (this.post.content.length > 4 && !this.isContentTruncated) {
      this.displayedContent = this.post.content.slice(0, 4);
      this.isContentTruncated = !this.isContentTruncated;
    } else {
      this.displayedContent = this.post.content;
      this.isContentTruncated = !this.isContentTruncated;
    }
  }
}
