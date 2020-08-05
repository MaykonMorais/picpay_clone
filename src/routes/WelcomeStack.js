import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../screens/Welcome'

import StepOne from '../components/SignUpSteps/StepOne'
import StepTwo from '../components/SignUpSteps/StepTwo'
import StepThree from '../components/SignUpSteps/StepThree'

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

          <SignUpStack.Screen 
            name="SignUpThree"
            options={{
              headerTitle: null, 
              headerTransparent: true,
              animationEnabled: false,
            }}
            component={StepThree}
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