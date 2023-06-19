import styled from "styled-components";

const Block = styled.input`
  width: 95%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1vh;
  margin-bottom: 1vh;
  padding: 0 2vw 0 2vw;
  font-family: ${(props) =>
    props.istitle === "true" ? `"Cookie", cursive` : `"Acme", sans-serif`};
  font-size: ${(props) => (props.istitle === "true" ? "4.5vh" : "2.5vh")};
`;

export default Block;
