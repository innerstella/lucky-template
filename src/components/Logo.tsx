import { styled } from "styled-components";

const Logo = () => {
  return (
    <LogoContainer>
      <div></div>
      <img src="/assets/png/logo.png" alt="logo" className="logo" />
      <img
        src="/assets/svg/ic-question.svg"
        alt="about"
        className="about"
        onClick={() =>
          window.open(
            "https://innerstella.notion.site/2156c8ab423f47059a20cef470647d7b?pvs=4"
          )
        }
      />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 2rem;
  .logo {
    width: 24rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
  }
  .about {
    width: 3rem;
  }
`;
