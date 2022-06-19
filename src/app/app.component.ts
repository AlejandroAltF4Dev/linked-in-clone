import {Component, OnInit} from '@angular/core';
import {Profile} from "./commons/state/profile.model";
import {ProfileService} from "./commons/state/profile.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LinkedIn';
  profile$: Observable<Profile> = this.profileService.get();

  constructor(
    private profileService: ProfileService
  ) {
  }

}
