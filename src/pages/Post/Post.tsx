import { ContentPost } from "./ContentPost/ContentPost";
import { IntroPost } from "./IntroPost/IntroPost";
import { PostContainer } from "./styles";

export function Post() {
  return (
    <PostContainer>
      <IntroPost />
      <ContentPost />
    </PostContainer>
  );
}
