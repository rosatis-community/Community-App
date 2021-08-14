export interface Post {
  _id: string;
  title: string;
  author: string;
  authorId: string;
  upvote: number;
  downvote: number;
  score: number;
  numComment: number;
}

export interface PostsData {
  posts: Post[];
}