import {Injectable} from '@angular/core';
import {Query, QueryEntity} from '@datorama/akita';
import {ProfileStore} from './profile.store';
import {Profile} from "./profile.model";

@Injectable({providedIn: 'root'})
export class ProfileQuery extends Query<Profile> {
  profile$ = this.select()

  constructor(protected override store: ProfileStore) {
    super(store);
  }

}
