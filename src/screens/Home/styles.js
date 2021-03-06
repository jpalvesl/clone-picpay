import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView`

`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceConteiner = styled.View`

`;

export const BalanceTitle = styled.Text`
  color: #fffc;
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;