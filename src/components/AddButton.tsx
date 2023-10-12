import { styled } from "styled-components";

const AddButton = () => {
  return <Button>질문 추가하기</Button>;
};

export default AddButton;

const Button = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  border-radius: 0.625rem;
  border: 1px solid #000;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  text-align: center;
  color: #000;
  font-family: SUIT Variable;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
