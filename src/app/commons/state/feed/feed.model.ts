export interface Feed {
  id: number;
  name: string;
  role: string;
  work_place: string;
  avatar: string;
}

export function createFeed(params: Partial<Feed>) {
  return {} as Feed;
}
