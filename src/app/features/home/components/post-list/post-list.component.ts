import {Component, Input, OnInit} from '@angular/core';
import {ProfileQuery} from "../../../../commons/state/profile/profile.query";
import {Post} from "../../../../commons/state/post/post.model";
import {Profile} from "../../../../commons/state/profile/profile.model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styles: []
})
export class PostListComponent implements OnInit {
  @Input() profile: Profile;
  @Input() posts: Post[]

  constructor() {
  }

  ngOnInit(): void {
  }

}
