import React from 'react'

import { TextInputMask } from 'react-native-masked-text'

import SignUpLayout from '../../SignUpLayout'

import {
  InfoMessage,
  ContentTitle,
  ContentLabel,
  UserInputs,
  InputText,
  UserAction,
  FowardButton,
  FowardButtonLabel,
}  from '../commonStyles'

import { HasCodeButton, HasCodeLabel } from './styles'

export default function StepTwo({ navigation }) {
  return (
    <SignUpLayout navigation={navigation}>
      <InfoMessage>
        <ContentTitle>Qual é o seu telefone?</ContentTitle>
        <ContentLabel>
          Precisamos te enviar um código de confirmação{`\n`}
          para garantir que só você vai ter acesso à sua conta
        </ContentLabel>
      </InfoMessage>

      <UserInputs>
        <InputText 
        keyboardType="numeric"
        style={{ textAlign: 'center', justifyContent: 'center'}}
        tam={40} label="DDD"
        render={props => <TextInputMask 
          {...props} 
          type="custom"
          options={{
            mask:"99"
          }} />}
        />

        <InputText 
          keyboardType="numeric"
          tam={270} label="Número do seu celular"
          render={props => <TextInputMask 
            {...props} 
            type="custom"
            options={{
            mask:"99999 9999"
          }} />}
        />
      </UserInputs>

      <UserAction>
        <FowardButton activeOpacity={0.9} onPress={() => navigation.navigate('SignUpThree')}>
          <FowardButtonLabel>Receber código via SMS</FowardButtonLabel>
        </FowardButton>

        <HasCodeButton>
          <HasCodeLabel>Já possuo código</HasCodeLabel>
        </HasCodeButton>
      </UserAction>
    </SignUpLayout>
  )
}