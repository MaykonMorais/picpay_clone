import React from 'react'
import { NavigationContainer, } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../screens/Welcome'
import StepOne from '../components/StepOne'

const Stack = createStackNavigator()

export default function WelcomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
          <Stack.Screen name="Welcome" component={Welcome}/>
          <Stack.Screen
            name="SignUp"
            component={StepOne} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}