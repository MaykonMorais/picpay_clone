import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../screens/Welcome'

const Stack = createStackNavigator()

export default function WelcomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
          <Stack.Screen name="Welcome" component={Welcome}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}