import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const ErrorMsg = styled(ErrorMessage)`
  color: ${props => props.theme.colors.error};
  text-shadow: none;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  text-shadow: 1px 1px 1px rgb(54, 50, 50);
`;

export const Input = styled(Field)`
  margin-top: 8px;
  display: block;
  border-radius: 15px;
  border: 1px solid white;
  height: 30px;
  width: 200px;
  padding: 5px;
  font-size: 15px;
`;

export const BtnAddContact = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  min-width: 70px;
  height: 40px;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.btnColor};

  box-shadow: 0px 0px 4px white;

  &:hover {
    background-color: ${props => props.theme.colors.btnHover};
  }
`;
