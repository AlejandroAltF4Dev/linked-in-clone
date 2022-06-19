import {Component, OnInit} from '@angular/core';
import {ProfileQuery} from "../../../../commons/state/profile/profile.query";
import {FeedQuery} from "../../../../commons/state/feed/feed.query";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  profile$ = this.profileQuery.profile$;
  feed$ = this.feedQuery.feed$;

  constructor(
    private profileQuery: ProfileQuery,
    private feedQuery: FeedQuery,
  ) {
  }

  ngOnInit(): void {
  }

}
