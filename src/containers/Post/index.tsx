import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import CContainer from "../../components/commons/CContainer";
import PostCard from "../../components/Post/Card/PostCard";
import { PostRouteParams } from "../../types/common";
import { PostData } from "../../types/Post";
import { GET_POST } from "./Queries";

const Post = () => {
  const { name, id } = useParams<PostRouteParams>();
  const { loading: postLoading, error: postError, data: postData } = useQuery<PostData>(GET_POST, { variables: { id } });

  return (
    <div>
      <CContainer maxWidth="md">
        post page
        <div>
          {postLoading ?
            'post loading...' :
            postData && (
              <PostCard post={postData.post} community={postData.post.community} />
            )
          }
        </div>
      </CContainer>
    </div>
  )
}
export default Post;