export interface Community {
  _id: string;
  name: string;
  title: string;
  communityIcon: string;
  subscribers: number;
}

export interface CommunitiesData {
  communities: Community[];
}