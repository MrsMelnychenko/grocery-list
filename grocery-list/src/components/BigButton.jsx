import styled from "styled-components";

const BigButton = styled.button`
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) =>
    props.googlebtn === "true" ? "#faf6dd" : "#80cb95"};
  font-family: "Cookie", cursive;
  font-size: 3vh;

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

export default BigButton;
