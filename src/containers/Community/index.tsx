import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import CContainer from "../../components/commons/CContainer";
import Banner from "../../components/Community/Info/Banner";
import PostCard from "../../components/Post/Card/PostCard";
import { CommunityRouteParams } from "../../types/common";
import { CommunityData, CommunityPostsData } from "../../types/Community";
import { GET_COMMUNITY_INFO, GET_COMMUNITY_POSTS } from "./Queries";

const CommunityPage = () => {
  const { name } = useParams<CommunityRouteParams>();
  const { loading: infoLoading, error: infoError, data: infoData } = useQuery<CommunityData>(GET_COMMUNITY_INFO, { variables: { name } });
  const { loading: postsLoading, error: postsError, data: postsData } = useQuery<CommunityPostsData>(GET_COMMUNITY_POSTS, { variables: { name } });

  return (
    <div>
      <CContainer maxWidth="md">
        <div>
          {infoLoading ? 'info loading...' :
            infoData && (
              <Banner community={infoData.community} />
            )
          }
        </div>
        <div>
          {postsLoading ? 'posts loading...' :
            postsData?.communityPosts?.length ? postsData.communityPosts.map(post => (
              <PostCard key={post._id} post={post} />
            ))
              : null}
        </div>
      </CContainer>
    </div>
  )
}

export default CommunityPage;