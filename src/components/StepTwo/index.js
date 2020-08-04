import React from 'react'

import SignUpLayout from '../SignUpLayout'


import {TextInput} from 'react-native'
export default function StepTwo({ navigation }) {
  return (
    <SignUpLayout navigation={navigation}>
      <TextInput>Teste</TextInput>
    </SignUpLayout>
  )
}