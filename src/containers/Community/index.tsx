import { useQuery } from '@apollo/client';
import { styled } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import CContainer from '../../components/commons/CContainer';
import Banner from '../../components/Community/Info/Banner';
import PostCard from '../../components/Post/Card/PostCard';
import { CommunityRouteParams } from '../../types/common';
import { CommunityData, CommunityPostsData } from '../../types/Community';
import { GET_COMMUNITY_INFO, GET_COMMUNITY_POSTS } from './Queries';

const BannerWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const PostCardWrapper = styled('div')(({ theme }) => ({
  '&:not(:last-child)': {
    marginBottom: theme.spacing(3),
  },
}));

const CommunityPage = () => {
  const { name } = useParams<CommunityRouteParams>();
  const {
    loading: infoLoading,
    error: infoError,
    data: infoData,
  } = useQuery<CommunityData>(GET_COMMUNITY_INFO, { variables: { name } });
  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery<CommunityPostsData>(GET_COMMUNITY_POSTS, {
    variables: { name },
  });

  return (
    <div>
      <CContainer maxWidth="md">
        <div>
          {infoLoading
            ? 'info loading...'
            : infoData && (
              <BannerWrapper>
                <Banner community={infoData.community} />
              </BannerWrapper>
            )}
        </div>
        <div>
          {postsLoading
            ? 'posts loading...'
            : postsData?.communityPosts?.length
              ? postsData.communityPosts.map((post) => (
                <PostCardWrapper key={post._id}>
                  <PostCard
                    post={post}
                    community={infoData.community}
                  />
                </PostCardWrapper>
              ))
              : null}
        </div>
      </CContainer>
    </div>
  );
};

export default CommunityPage;
