import styled from "styled-components";

export const FormButtonContainer = styled.div`
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    background-color: #f9f9f9;
    display: block;
    width: 100%;
  }
  button:hover {
    background: #f3f3f3;
  }
  button:active {
    border-color: #646cff;
  }
`;
