import { useEffect, useState } from "react";
import { styled } from "styled-components";

type Props = {
  questionNum: number;
};

const Content = ({ questionNum }: Props) => {
  const [num, setNum] = useState(700);
  const [question, setQuestion] = useState("");
  const [memo, setMemo] = useState("");
  const [content, setContent] = useState("");
  const [remove, setRemove] = useState(0);

  const keyNum = `num-${questionNum}`;
  const keyQuestion = `question-${questionNum}`;
  const keyMemo = `memo-${questionNum}`;
  const keyContent = `content-${questionNum}`;

  // 제한 글자수 수정
  const editNum = () => {
    const input = prompt("글자수를 입력해주세요");
    if (input && +input) {
      setNum(+input);
      localStorage.setItem(keyNum, input);
    }
  };

  // 공백 제외 글자 수 계산
  useEffect(() => {
    let temp = content.split(" ").join("");
    setRemove(temp.length);
  }, [content]);

  // 스토리지 저장 값 가져오기
  useEffect(() => {
    let storageNum = localStorage.getItem(keyNum);
    let storageQuestion = localStorage.getItem(keyQuestion);
    let storageMemo = localStorage.getItem(keyMemo);
    let storageContent = localStorage.getItem(keyContent);

    storageNum && +storageNum && setNum(+storageNum);
    storageQuestion && setQuestion(storageQuestion);
    storageMemo && setMemo(storageMemo);
    storageContent && setContent(storageContent);
  }, []);

  return (
    <ContentContainer>
      <div className="box">
        {/* 라벨 */}
        <div className="label">
          <p className="text-title">질문 {questionNum}</p>
          <div className="input-num">
            <p className="text-num">{num}자</p>
            <img
              src="assets/svg/ic-edit.svg"
              alt="edit"
              className="ic"
              onClick={() => editNum()}
            />
          </div>
          <p>
            공백 포함 : {content.length}/{num}자&nbsp;&nbsp;&nbsp;공백 제거 :
            {remove}/{num}자
          </p>
        </div>

        <textarea
          // type="text"
          className="input-title"
          placeholder="질문을 입력하세요"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
            localStorage.setItem(keyQuestion, e.target.value);
          }}
        />
        <textarea
          className="input-memo"
          placeholder="메모를 입력하세요"
          onChange={(e) => {
            setMemo(e.target.value);
            localStorage.setItem(keyMemo, e.target.value);
          }}
          value={memo}
        />
        <textarea
          className="input-content"
          placeholder="내용을 입력하세요"
          onChange={(e) => {
            setContent(e.target.value);
            localStorage.setItem(keyContent, e.target.value);
          }}
          value={content}
        />
      </div>
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = styled.div`
  .label {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .input-num {
    padding: 0.5rem 0.7rem;

    border-radius: 0.625rem;
    border: 1px solid #000;
    background: #fff;

    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    .text-num {
      color: #000;
      font-family: SUIT Variable;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;

      margin: 0;
    }
    .ic {
      width: 1rem;
    }
  }
  .box {
    padding: 2rem;
    display: flex;
    flex-direction: column;

    border-radius: 0.625rem;
    border: 1px solid #000;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .text-title {
    color: #000;
    font-family: SUIT Variable;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 0;
  }
  .input-title {
    border: none;
    margin-top: 1rem;

    color: #000;
    font-family: SUIT Variable;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .input-memo {
    border-radius: 0.625rem;
    background: #fff2d3;
    margin-top: 1rem;
    padding: 1rem;
    height: 5rem;

    color: #000;
    font-family: SUIT Variable;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .input-content {
    border-radius: 0.625rem;
    background: #f1f1f1;
    margin-top: 1rem;
    padding: 1rem;
    height: 15rem;

    color: #000;
    font-family: SUIT Variable;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
