import styled  from 'styled-components/native'
// SafeAreaView => Abaixo da area de notificações e botões
export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;


export const Header = styled.View`
  height: 50px;
  padding: 0 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


export const BalanceContainer = styled.View`
`;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

