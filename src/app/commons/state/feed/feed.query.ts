import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {FeedStore, FeedState} from './feed.store';

@Injectable({providedIn: 'root'})
export class FeedQuery extends QueryEntity<FeedState> {
  feed$ = this.selectAll()

  constructor(protected override store: FeedStore) {
    super(store);
  }

}
