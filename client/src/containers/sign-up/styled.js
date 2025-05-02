import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap;
  background-color: #fbf8f1;
`;

export const StyledForm = styled.form`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: ${({ err }) =>
    err === "true" ? "1px solid red" : "1px solid #cccccc"};
  font-size: 1rem;
  color: #333333;
  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 5px rgba(0, 102, 204, 0.5);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #ffeecb;
  color: gray;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #f7cb72;
    color: white;
  }
`;

export const LinkPlace = styled.div`
  padding-top: 8px;
  text-align: center;
`;
