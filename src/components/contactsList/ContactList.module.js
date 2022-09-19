import styled from 'styled-components';

export const List = styled.li`
  margin-top: 20px;
`;

export const Item = styled.li`
  max-width: 550px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  margin-top: 20px;
  display: inline-block;
  border-radius: 14px;
  padding: 0.3rem 0;
  width: 4rem;
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
