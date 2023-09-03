import { Component } from '@angular/core';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-get-more-posts',
  templateUrl: './get-more-posts.component.html',
  styleUrls: ['./get-more-posts.component.scss']
})
export class GetMorePostsComponent {

    protected readonly faAngleDown = faAngleDown;
}
