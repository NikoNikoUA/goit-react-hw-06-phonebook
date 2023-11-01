import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

export const BtnDeleteItem = styled.button`
  min-width: 70px;
  height: 30px;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  box-shadow: 0px 0px 4px white;
  background-color: ${props => props.theme.colors.btnColor};

  &:hover {
    background-color: ${props => props.theme.colors.btnHover};
  }
`;
