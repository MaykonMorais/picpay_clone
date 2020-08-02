import React from 'react'

import fisrtWoman from '../../images/woman2.png' 

import { TouchableOpacity } from 'react-native'

import { WelcomeContainer, ImgBackground, WelcomeContent, WelcomeContentTitle, WelcomeActions, ActionButton, LabelButton } from './styles'

export default function Welcome({ navigation }) {
  return (
    <WelcomeContainer>
      <ImgBackground source={fisrtWoman} resizeMode="cover">
        <WelcomeContent>
          <WelcomeContentTitle>Com o PicPay seus pagamentos são mais simples e seguros</WelcomeContentTitle>
          
          <WelcomeActions>

            <ActionButton onPress={() => navigation.navigate('SignUp')} background="#11C770" activeOpacity={0.9}>
              <LabelButton>Cadastrar</LabelButton>             
            </ActionButton>
            
            <ActionButton background="transparent" activeOpacity={0.7}>
              <LabelButton>Entrar</LabelButton>
            </ActionButton>
            
          </WelcomeActions>
        </WelcomeContent>
      </ImgBackground>
    </WelcomeContainer>
  );
}