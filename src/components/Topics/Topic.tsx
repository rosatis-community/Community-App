import { FC } from "react";

interface TopicProps {
  id: string;
  title: string;
  entryCount: number;
}

const Topic: FC<TopicProps> = ({ id, title, entryCount }) => {
  return (
    <div>
      Topic
      {id}
      {title}
      {entryCount}
    </div>
  )
}

export default Topic;