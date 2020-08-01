import React,  { useState } from 'react'

import MainAppStack from './MainAppStack'
import WelcomeStack from './WelcomeStack'

export default function Navigation() {
  const [authenticated, setAuthenticated] = useState(false)
  
  return authenticated ? (<MainAppStack />) : (<WelcomeStack />)
}