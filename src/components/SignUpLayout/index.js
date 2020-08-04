import React, { useState } from 'react'

import BackButton from '../BackButton'

import { 
  SignUpContainer,
  Header, 
  SignUpContent,
  SignUpBody,
  AlreadyRegister,
  AlreadyRegisterButton,
  AlreadyRegisterLabel,
   } from './styles'

export default function SignUpLayout({ navigation }) {
  const [name, setName] = useState('')

  return (
    <SignUpContainer>
      <Header>
         <BackButton onPress={navigation.goBack} />
      </Header>

      <SignUpContent>
        <SignUpBody>

        </SignUpBody>
        
          <AlreadyRegister>
            <AlreadyRegisterButton activeOpacity={0.8}>
              <AlreadyRegisterLabel>Já sou cadastrado</AlreadyRegisterLabel>
            </AlreadyRegisterButton>
          </AlreadyRegister>       
      </SignUpContent>

    </SignUpContainer>
  )
}