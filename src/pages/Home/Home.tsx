import { useCallback, useEffect, useState } from "react";
import { IntroUser } from "./components/IntroUser/IntroUser";
import { Post } from "./components/Post/Post";
import { Search } from "./components/Search/Search";
import { BoxContainer, PostsListContainer } from "./styles";
import { api } from "../../lib/axios";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}%20repo:marciocamollez/rocketseat-react-projeto03-desafio-github-blog`
        );

        setPosts(response.data.items);
        console.log(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <BoxContainer>
        <IntroUser />
        <Search postsLength={posts.length} getPosts={getPosts} />
        {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          <PostsListContainer>
            {posts.map((post) => (
              <Post key={post.number} post={post} />
            ))}
          </PostsListContainer>
        )}
      </BoxContainer>
    </>
  );
}
