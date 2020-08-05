import React, { useState } from 'react'

import { StatusBar } from 'react-native'


import { 
  SignUpContainer, 
  SignUpContent,
  SignUpBody,
  AlreadyRegister,
  AlreadyRegisterButton,
  AlreadyRegisterLabel,
} from './styles'

export default function SignUpLayout({ children }) {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
    <SignUpContainer>
      <SignUpContent>
        <SignUpBody animation="slideInRight" duration={600}>
            { children }  
        </SignUpBody>
        
          <AlreadyRegister>
            <AlreadyRegisterButton activeOpacity={0.8}>
              <AlreadyRegisterLabel>Já sou cadastrado</AlreadyRegisterLabel>
            </AlreadyRegisterButton>
          </AlreadyRegister>       
      </SignUpContent>
    </SignUpContainer>
    </>
  )
}