import { PostContainer } from "./styles";
import { Link } from "react-router-dom";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { IPost } from "../../Home";

interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at);

  return (
    <PostContainer>
      <div>
        <Link to={`/post/${post.number}`}>
          <h2>{post.title}</h2>
        </Link>
        <span>{formattedDate}</span>
      </div>
      <div>
        <p>{post.body}</p>
      </div>
    </PostContainer>
  );
}
