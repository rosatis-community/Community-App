import { Post } from './Post';

export interface Community {
  _id: string;
  name: string;
  title: string;
  communityIcon: string;
  subscribers: number;
}

export interface CommunityData {
  community: Community;
}

export interface CommunityPostsData {
  communityPosts: Post[];
}

export interface CommunitiesData {
  searchCommunities: Community[];
}
