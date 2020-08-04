import React, { useState } from 'react'

import { 
  SignUpContainer,
  Header, 
  SignUpContent,
  SignUpBody,
  AlreadyRegister,
  AlreadyRegisterButton,
  AlreadyRegisterLabel,
   } from './styles'

import * as Animatable from 'react-native-animatable'

export default function SignUpLayout({ navigation, children }) {
  return (
    <SignUpContainer>
      <Header>
      </Header>

      <SignUpContent>
        <SignUpBody animation="slideInRight">
            { children }  
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