import styled from 'styled-components/native'


export const WelcomeContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ImgBackground = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
`;

export const WelcomeContent = styled.View`
  height: 300px;
  margin: 30px;
`;

export const WelcomeContentTitle = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-bottom: 30px;
`;

export const WelcomeActions = styled.View``;

export const ActionButton = styled.TouchableOpacity`
  background: ${({background}) => background};
  border: ${({background}) => background === 'transparent' ? '1px solid #fffcfa' : '1px solid rgba(255, 255, 255, 0.1)'};
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 15px;
  height: 38px;
`;

export const LabelButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;