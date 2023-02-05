import styled from "styled-components";

export const LoginFormContainer = styled.div`
  display: block;
  padding: 1.875rem;
  min-width: 24.75rem;
  border-radius: 10px;

  background: #fff;
`;

export const LoginFormContent = styled.div`
  h1 {
    margin: 0;
    margin-bottom: 30px;

    font-size: 1.8em;
    line-height: 1.1;
  }
`;

export const ErrorMessage = styled.div`
  display: block;
  margin-bottom: 15px;
  padding: 10px 15px;
  border-radius: 6px;

  font-weight: bold;

  color: red;
  background: rgba(255, 0, 0, 0.1);
`;
