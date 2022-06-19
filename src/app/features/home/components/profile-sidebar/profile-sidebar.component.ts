import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../../../commons/state/profile/profile.model";

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styles: []
})
export class ProfileSidebarComponent implements OnInit {
  @Input() profile?: Profile = undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
