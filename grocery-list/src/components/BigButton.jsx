import styled from "styled-components";

const BigButton = styled.button`
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.googlebtn || "#80cb95"};
  font-family: "Cookie", cursive;
  font-size: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;
const BigButtonGoogle = ({ children }) => (
  <BigButton googlebtn="#faf6dd"> {children} </BigButton>
);
export default BigButton;
export { BigButtonGoogle };
