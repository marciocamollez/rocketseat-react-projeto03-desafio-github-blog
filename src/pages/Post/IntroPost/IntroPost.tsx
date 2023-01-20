import { PostTitle } from "./styles";
import { relativeDateFormatter } from "../../../utils/formatter";
import { IPost } from "../../Home/Home";

interface PostHeaderProps {
  postData: IPost;
  isLoading: boolean;
}

export function IntroPost({ postData }: PostHeaderProps) {
  const formattedDate = relativeDateFormatter(postData?.created_at);

  return (
    <PostTitle>
      <div>
        <span>
          <a href="/">Voltar</a>
        </span>
        <span>
          <a href="/">Ver no Github</a>
        </span>
      </div>
      <div>
        <h1>{postData.title}</h1>
      </div>
      <div>
        <span>
          <a href="/">{formattedDate}</a>
        </span>
        <span>
          <a href="/">{postData.comments} comentários</a>
        </span>
      </div>
    </PostTitle>
  );
}
