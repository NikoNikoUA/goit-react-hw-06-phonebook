import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  width: 500px;
  height: 500px;
  margin-top: 80px;
  position: relative;
  background-color: ${props => props.theme.colors.containerColor};

  border: none;
  border-radius: 15px;

  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  border: 1px solid black;
  padding: 40px;

  position: absolute;
  top: -50px;
  left: -50px;

  box-shadow: 2px 2px 4px white;
  background-color: ${props => props.theme.colors.backgroundColor};
  border: none;
  border-radius: 8px;
`;

export const StatisticsContainer = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.backgroundColor};
  top: 250px;
  right: -50px;
  min-width: 300px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  gap: 15px;
`;

export const MainHeading = styled.h1`
  margin: 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: rgb(145, 233, 123);
`;

export const ContactsHeading = styled.h2`
  margin: 0;
  font-weight: bold;
  color: rgb(145, 233, 123);
`;

export const NoContactsText = styled.p`
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`;

// export const Icon = styled.svg`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
