import {Component, OnInit} from '@angular/core';
import {Profile} from "./commons/state/profile/profile.model";
import {ProfileService} from "./commons/state/profile/profile.service";
import {Observable} from "rxjs";
import {FeedService} from "./commons/state/feed/feed.service";
import {PostService} from "./commons/state/post/post.service";
import {Feed} from "./commons/state/feed/feed.model";
import {Post} from "./commons/state/post/post.model";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '(19) Feed | LinkedIn';
  profile$: Observable<Profile> = this.profileService.get();
  feed$: Observable<Feed[]> = this.feedService.get();
  posts$: Observable<Post[]> = this.postService.get();

  constructor(
    private titleService: Title,
    private profileService: ProfileService,
    private feedService: FeedService,
    private postService: PostService,
  ) {
    titleService.setTitle(this.title)
  }

}
