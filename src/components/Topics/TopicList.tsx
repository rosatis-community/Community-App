import { gql, useQuery } from '@apollo/client';
import { TopicsData } from '../../types/Topic';
import CTypography from '../commons/CTypography';
import Topic from './Topic';

const GET_TOPICS = gql`
  query GetTopics {
    topics {
      id
      title
      entryCount
    }
  }
`;

const TopicList = () => {
  const { loading, error, data } = useQuery<TopicsData>(GET_TOPICS);

  if (loading) return <CTypography>Loading...</CTypography>;
  if (error) return <CTypography>Error! {error.message}</CTypography>;

  return (
    <div>
      {data.topics.map(topic => (
        <Topic {...topic} />
      ))}
    </div>
  )
}

export default TopicList;