import { ContentPost } from "./ContentPost/ContentPost";
import { IntroPost } from "./IntroPost/IntroPost";
import { PostContainer } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { IPost } from "../Home/Home";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/repos/marciocamollez/rocketseat-react-projeto03-desafio-github-blog/issues/${id}`
      );

      setPostData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [postData]);

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <PostContainer>
      <IntroPost isLoading={isLoading} postData={postData} />
      {!isLoading && <ContentPost content={postData.body} />}
    </PostContainer>
  );
}
