import styled from "styled-components";

const SmallButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${props => props.isdelete ? "#F46D6D" : "#EFE4CE"};
  font-family: "Acme", sans-serif;
  width: 40%;
  height: 1.5rem;
  `;

export default SmallButton;