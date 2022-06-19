import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Feed } from './feed.model';

export interface FeedState extends EntityState<Feed> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'feed' })
export class FeedStore extends EntityStore<FeedState> {

  constructor() {
    super();
  }

}
