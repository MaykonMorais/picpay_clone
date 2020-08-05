import styled from 'styled-components/native'

import { TextInput } from 'react-native-paper'

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
  margin-bottom: 20px;
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
  height: 80px;
  width: 100%;
  margin-bottom: 2px;
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


export const ContractTerms = styled(ContentLabel)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

export const RedirectLink = styled.Text`
  color: #11c770;
`;


export const AlreadyRegister = styled.View`
`;

export const AlreadyRegisterButton = styled.TouchableOpacity``; 

export const AlreadyRegisterLabel = styled(ContentLabel)`
  font-weight: bold;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
`;
