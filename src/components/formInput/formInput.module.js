import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;
  font-weight: 500;
  &:hover {
    color: #007fff;
  }
`;

export const Input = styled.input`
  margin-top: 3px;
  padding: 5px 7px 5px;
  border: none;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -5px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  &:hover,
  &:focus {
    outline: 1px solid #003fff;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;

export const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  margin-top: 20px;
  display: inline-block;
  border-radius: 14px;
  padding: 0.5rem 0;
  width: 9rem;
  background: transparent;
  color: #003fff;
  border: 2px solid #003fff;

  &:hover,
  &:focus {
    background-color: #003fff;
    color: #ffffff;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;
