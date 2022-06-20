import {Component, OnInit} from '@angular/core';
import {ProfileQuery} from "../../../../commons/state/profile/profile.query";
import {FeedQuery} from "../../../../commons/state/feed/feed.query";
import {PostQuery} from "../../../../commons/state/post/post.query";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  profile$ = this.profileQuery.profile$;
  feed$ = this.feedQuery.feed$;
  posts$ = this.postQuery.post$;

  constructor(
    private profileQuery: ProfileQuery,
    private feedQuery: FeedQuery,
    private postQuery: PostQuery,
  ) {
  }

  ngOnInit(): void {
  }

}
