import { FC } from "react";
import { Post as PostType } from "../../types/Post";
import CTypography from "../commons/CTypography";

interface PostProps {
  post: PostType;
}

const Post: FC<PostProps> = ({ post }) => {
  const { _id, title, author, authorId, upvote, downvote, score, numComment } = post
  return (
    <div>
      <CTypography>
        {title}
      </CTypography>
      <CTypography>
        {author}
      </CTypography>
      <CTypography>
        {authorId}
      </CTypography>
      <CTypography>
        {upvote}
      </CTypography>
      <CTypography>
        {downvote}
      </CTypography>
      <CTypography>
        {score}
      </CTypography>
      <CTypography>
        {numComment}
      </CTypography>
    </div>
  )
}

export default Post;