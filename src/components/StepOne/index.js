import React from 'react'

import LayoutSignUp from '../SignUpLayout'

import {
  InfoMessage,
  ContentTitle,
  ContentLabel, 
  UserInputs, 
  InputText,
  UserAction,
  FowardButton,
  FowardButtonLabel,
  RedirectLink,
  ContractTerms,
} from './styles'

export default function StepOne({navigation}) {
  return (
    <LayoutSignUp navigation={navigation}>
            <InfoMessage>
              <ContentTitle>Qual o seu nome?</ContentTitle>
              <ContentLabel>É necessário que você informe seu nome verdadeiro.{`\n`}Não utilize nome de terceiros. </ContentLabel>
            </InfoMessage>
            
            <UserInputs>
              <InputText tam={120} label="Nome"  />
              <InputText tam={178} label="Sobrenome"  /> 
            </UserInputs>

          <UserAction>
            <FowardButton activeOpacity={0.9} onPress={() => navigation.navigate('SignUpTwo')}>
                  <FowardButtonLabel>Avançar</FowardButtonLabel>
            </FowardButton>
          </UserAction>

          <ContractTerms>
              Ao criar sua conta, você concorda com nossos{`\n`}<RedirectLink>Termos de Serviço</RedirectLink> e <RedirectLink>Política de Privacidade</RedirectLink>
          </ContractTerms>
    </LayoutSignUp>
  )
}