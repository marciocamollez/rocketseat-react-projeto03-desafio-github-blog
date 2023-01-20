import { IntroUser } from "./components/IntroUser/IntroUser";
import { Post } from "./components/Post/Post";
import { Search } from "./components/Search/Search";
import { BoxContainer, PostsListContainer } from "./styles";

export function Home() {
  return (
    <>
      <BoxContainer>
        <IntroUser />
        <Search />
        <PostsListContainer>
          <Post />
          <Post />
          <Post />
          <Post />
        </PostsListContainer>
      </BoxContainer>
    </>
  );
}
