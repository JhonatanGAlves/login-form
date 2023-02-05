import styled from "styled-components";

export const FormRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  label {
    display: block;
  }

  input {
    padding: 10px;

    border: 1px solid #ccc;
    border-radius: 6px;
  }

  input:focus {
    border-color: #646cff;
  }
`;
