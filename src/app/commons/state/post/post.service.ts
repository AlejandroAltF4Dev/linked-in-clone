import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';
import {tap} from 'rxjs/operators';
import {Post} from './post.model';
import {PostStore} from './post.store';

@Injectable({providedIn: 'root'})
export class PostService {

  constructor(private postStore: PostStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Post[]>('/assets/data/posts.json').pipe(tap(entities => {
      this.postStore.set(entities);
    }));
  }

  add(post: Post) {
    this.postStore.add(post);
  }

  update(id: ID, post: Partial<Post>) {
    this.postStore.update(id, post);
  }

  remove(id: ID) {
    this.postStore.remove(id);
  }

}
