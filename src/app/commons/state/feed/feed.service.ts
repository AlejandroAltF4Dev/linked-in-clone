import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';
import {tap} from 'rxjs/operators';
import {Feed} from './feed.model';
import {FeedStore} from './feed.store';

@Injectable({providedIn: 'root'})
export class FeedService {

  constructor(private feedStore: FeedStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Feed[]>('/assets/data/feed.json').pipe(tap(entities => {
      this.feedStore.set(entities);
    }));
  }

  add(feed: Feed) {
    this.feedStore.add(feed);
  }

  update(id: ID, feed: Partial<Feed>) {
    this.feedStore.update(id, feed);
  }

  remove(id: ID) {
    this.feedStore.remove(id);
  }

}
