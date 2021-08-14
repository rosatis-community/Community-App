
export interface Topic {
  id: string;
  title: string;
  entryCount: number;
}

export interface TopicsData {
  topics: Topic[];
}