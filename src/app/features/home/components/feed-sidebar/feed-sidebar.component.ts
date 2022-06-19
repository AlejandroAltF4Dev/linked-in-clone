import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../../../commons/state/profile/profile.model";
import {Feed} from "../../../../commons/state/feed/feed.model";
import {HashMap} from "@datorama/akita";

@Component({
  selector: 'app-feed-sidebar',
  templateUrl: './feed-sidebar.component.html',
  styles: []
})
export class FeedSidebarComponent implements OnInit {
  @Input() feed?: Feed[] = undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
