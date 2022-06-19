import {Injectable} from '@angular/core';
import {EntityState, EntityStore, Store, StoreConfig} from '@datorama/akita';
import {Profile} from './profile.model';

export function createInitialState(): Profile {
  return {
    avatar: "", banner: "", company: "", email: "", first_name: "", id: 0, last_name: "", role: ""
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'profile'})
export class ProfileStore extends Store<Profile> {

  constructor() {
    super(createInitialState());
  }

}
