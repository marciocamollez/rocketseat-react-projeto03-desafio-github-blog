import { HeaderBox, HeaderContainer } from "./styled";

import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <HeaderBox>
      <HeaderContainer>
        <img src={Logo} />
      </HeaderContainer>
    </HeaderBox>
  );
}
