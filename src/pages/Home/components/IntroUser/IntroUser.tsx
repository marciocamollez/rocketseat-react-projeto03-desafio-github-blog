import { IntroBox, IntroCard, IntroImage, IntroText } from "./styles";
import { useEffect, useState, useCallback } from "react";
import { api } from "../../../../lib/axios";

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function IntroUser() {
  const [users, setUsers] = useState<ProfileData>({} as ProfileData);
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/users/marciocamollez`);

      setUsers(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [users]);

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <IntroBox>
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <IntroCard>
          <IntroImage>
            <img src={users.avatar_url} />
          </IntroImage>
          <IntroText>
            <div>
              <h1>{users.name}</h1>
              <a href={users.html_url} target="_blank">
                Github
              </a>
            </div>

            <div>
              <p>{users.bio}</p>
            </div>

            <div>
              <span>
                <a href={users.html_url} target="_blank">
                  {users.login}
                </a>
              </span>
              <span>
                <a href="#">{users.company}</a>
              </span>
              <span>
                <a href="#">{users.followers} seguidores</a>
              </span>
            </div>
          </IntroText>
        </IntroCard>
      )}
    </IntroBox>
  );
}
