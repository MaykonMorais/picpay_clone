import styled from 'styled-components/native'

export const SignUpContainer = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.View`
  margin: 20px 0px;
  padding:  2px 20px;
`;

export const ContentLabel = styled.Text`
  font-size: 14px;
  padding: 1px 0px;  
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
`;


export const BackButton = styled.TouchableOpacity`
`;

export const SignUpContent= styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const SignUpBody = styled.View`
  flex-direction: column;
  justify-content:  center;
  padding: 0px 8px;
`;


export const AlreadyRegister = styled.View`
`;

export const AlreadyRegisterButton = styled.TouchableOpacity``; 

export const AlreadyRegisterLabel = styled(ContentLabel)`
  font-weight: bold;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
`;

