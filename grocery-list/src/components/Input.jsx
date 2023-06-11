import styled from "styled-components";

const Input = styled.input`
  border: 1px solid ${(props) => (props.error === "true" ? "red" : "black")};
  border-radius: 5px;
  width: 100%;
  height: 1.5rem;
`;

export default Input;
