import { Community } from './Community';
import { User } from './User';

export interface Post {
  _id: string;
  title: string;
  author: User;
  upvote: number;
  downvote: number;
  score: number;
  numComment: number;
  community: Community;
  created_at: Date;
}

export interface PostData {
  post: Post;
}

export interface PostsData {
  posts: Post[];
}
