import {Component, OnInit} from '@angular/core';
import {ProfileQuery} from "../../state/profile/profile.query";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  navItems = [
    {id: 1, text: 'Home', icon: 'bootstrap-house-door-fill'},
    {id: 2, text: 'My network', icon: 'bootstrap-info-circle-fill'},
    {id: 3, text: 'Jobs', icon: 'bootstrap-briefcase-fill'},
    {id: 4, text: 'Messages', icon: 'bootstrap-chat-right-dots-fill'},
    {id: 5, text: 'Notifications', icon: 'bootstrap-bell-fill'},
  ];
  selected = 1;

  profile$ = this.profileQuery.profile$;

  constructor(
    private profileQuery: ProfileQuery
  ) {
  }

  ngOnInit(): void {
  }

  select(id: number) {
    this.selected = id;
  }
}
