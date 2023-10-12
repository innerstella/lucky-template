import { useEffect, useState } from "react";
import { styled } from "styled-components";

import AddButton from "../components/AddButton";
import Logo from "../components/Logo";
import Content from "../components/Content";

const MainPage = () => {
  const [company, setCompany] = useState("");

  useEffect(() => {
    const storageCompany = localStorage.getItem("company");
    storageCompany && setCompany(storageCompany);
  }, []);

  return (
    <MainContainer>
      {/* 로고 */}
      <Logo />
      {/* 기업명 */}
      <label className="input-company">🏢</label>
      <input
        type="text"
        className="input-company"
        placeholder="기업명을 입력하세요"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
          localStorage.setItem("company", e.target.value);
        }}
      />
      {/* 내용 */}
      <div className="content-box">
        <Content questionNum={1} />
        <Content questionNum={2} />
        <Content questionNum={3} />
        <Content questionNum={4} />
        <Content questionNum={5} />
      </div>
      {/* <AddButton /> */}
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  margin: 2rem;

  .input-company {
    border: none;
    margin: 0 0 1rem 1rem;
    color: #000;
    font-family: SUIT Variable;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .content-box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
