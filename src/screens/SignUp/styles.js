import styled from 'styled-components/native'
import { TextInput } from 'react-native-paper'

export const SignUpContainer = styled.View`
  flex-direction: column;
`;

export const Header = styled.View`
  margin-top: 20px;
  padding:  2px 20px;
  margin-bottom: 25px;
`;

export const BackButton = styled.TouchableOpacity`
`;

export const SignUpContent= styled.View`
  flex-direction: column;
  align-items: center;
  padding: 0px 8px;
`;

export const InfoMessage = styled.View`
  align-items: center;
  margin-bottom: 25px;
`;

export const ContentTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ContentLabel = styled.Text`
  font-size: 14px;
  padding: 1px 0px;  
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
`;

export const UserInputs = styled.View`
  flex-direction: row;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content:  center;
  margin-bottom: 30px;
`; 

export const InputText = styled(TextInput)`
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.1);
  width: ${({tam}) => tam}px;
  paddingHorizontal: 0;  
  margin-left: 15px;
`;

export const UserAction  =  styled.View`
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
`;
export const FowardButton =  styled.TouchableOpacity`
  height: 45px;
  width:  100%;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  
  background: #11c770;
`;

export const FowardButtonLabel = styled.Text`
  color: #fff;
  font-size: 16px;
`;