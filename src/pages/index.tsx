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

  const resetContent = () => {
    if (window.confirm("초기화하시겠습니까?")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <MainContainer>
      {/* 로고 */}
      <Logo />
      <div className="flex-row">
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
        <div className="button" onClick={() => resetContent()}>
          <p className="text">초기화하기</p>
        </div>
      </div>
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
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .button {
    border-radius: 0.625rem;
    border: 1px solid #000;
    background: #646464;
    height: 40px;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      color: #fff;
      font-family: SUIT Variable;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-align: center;
      margin: 0;
    }
  }
`;
