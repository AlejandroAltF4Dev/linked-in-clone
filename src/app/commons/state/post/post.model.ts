export interface Post {
  following: boolean;
  avatar: string;
  id: number;
  first_name: string;
  last_name: string;
  roles: string[];
  work_place: string;
  publish_date: string;
  body: string;
  image: string;
  likes: number;
  shared: number;
  comments: Comment[];
}

export interface Comment {
  id: number;
  name: string;
  date: string;
  text: string;
  avatar: string;
}

export function createPost(params: Partial<Post>) {
  return {} as Post;
}
