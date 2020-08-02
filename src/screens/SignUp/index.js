import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper'


import { SignUpContainer, Header, BackButton,  SignUpContent, InfoMessage ,ContentTitle, ContentLabel, UserInputs, InputText } from './styles'

export default function SignUp() {
  const [name, setName] = useState('')

  return (
    <SignUpContainer>
      <Header>
        <BackButton activeOpacity={0.4}>
          <Feather name="arrow-left" size={28} color="#19c872"/>
        </BackButton>
      </Header>

      <SignUpContent>
          <InfoMessage>
            <ContentTitle>Qual o seu nome?</ContentTitle>
            <ContentLabel>É necessário que você informe seu nome verdadeiro.{`\nNão utilize nome de terceiros.`} </ContentLabel>
          </InfoMessage>
          
          <UserInputs>
           <InputText tam={110} label="Nome"  />
           <InputText tam={150} label="Sobrenome"  />
          </UserInputs>
          
      </SignUpContent>
    </SignUpContainer>
  )
}