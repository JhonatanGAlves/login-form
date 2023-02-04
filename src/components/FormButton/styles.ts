import styled from "styled-components";

export const FormButtonContainer = styled.div`
  button {
    display: block;
    padding: 0.6em 1.2em;
    width: 100%;

    border: 1px solid transparent;
    border-radius: 8px;

    font-size: 1rem;
    font-weight: 500;
    font-family: inherit;

    cursor: pointer;

    transition: border-color 0.25s;

    background-color: #f9f9f9;

    :disabled {
      cursor: not-allowed;
    }

    :hover:not([disabled]) {
      background: #f3f3f3;
    }
    :active:not([disabled]) {
      border-color: #646cff;
    }
  }
`;
