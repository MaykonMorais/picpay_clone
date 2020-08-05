import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../screens/Welcome'

import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo'

const SignUpStack = createStackNavigator()
const RootStack = createStackNavigator()

function SignUp() {
  return (
    <SignUpStack.Navigator screenOptions={{
      headerTintColor: '#22ba74',
    }}> 
          <SignUpStack.Screen
            name="SignUpOne"
            component={StepOne}
            options={{
              headerTitle: null,
              headerTransparent:  true,
              animationEnabled: false,
            }}
            />
          <SignUpStack.Screen 
            name="SignUpTwo"
            component={StepTwo}
            options={{
              headerTitle: null,
              headerTransparent:  true,
              animationEnabled: false,
            }}
          />
      </SignUpStack.Navigator>       
  )
}


export default function WelcomeStack() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none" >
          <RootStack.Screen 
          name="Welcome" 
          component={Welcome}
          options={{
            headerShown: false,
          }}
          />

          <RootStack.Screen 
          name="SignUp" 
          component={SignUp}
          options={{
            headerShown: false,
          }}
          />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}