import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Profile} from './profile.model';
import {ProfileStore} from './profile.store';

@Injectable({providedIn: 'root'})
export class ProfileService {

  constructor(private profileStore: ProfileStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Profile>('/assets/data/profile.json').pipe(tap(profile => {
      this.profileStore.update(profile);
    }));
  }
}
