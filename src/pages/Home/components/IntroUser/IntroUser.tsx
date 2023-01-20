import { IntroBox, IntroCard, IntroImage, IntroText } from "./styles";
import Avatar from "../../../../assets/avatar.png";

export function IntroUser() {
  return (
    <IntroBox>
      <IntroCard>
        <IntroImage>
          <img src={Avatar} />
        </IntroImage>
        <IntroText>
          <div>
            <h1>Cameron Williamson</h1>
            <a href="#">Github</a>
          </div>

          <div>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </div>

          <div>
            <span>
              <a href="#">cameronwill</a>
            </span>
            <span>
              <a href="#">Rocketseat</a>
            </span>
            <span>
              <a href="#">32 seguidores</a>
            </span>
          </div>
        </IntroText>
      </IntroCard>
    </IntroBox>
  );
}
